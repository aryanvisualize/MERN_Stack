import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import authRoute from "../routes/auth.route.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../config/swagger.config.js"

const app = express();

//Security middleware
app.use(helmet());

//CoRS
app.use(cors({origin: process.env.CLIENT_URL || "*", credentials: true}));

//Logger
app.use(morgan("dev"));

//Body parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.get("/", (req, res)=>{
    res.json({message: "API is running"});
});

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
        customCss: "swagger-ui.topbar {display: none}",
        customSiteTitle: "Cloud Kitchen API Docs",
    }),
);

app.use("/api/v1/auth", authRoute);

//404 handler
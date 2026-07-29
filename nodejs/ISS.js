import express from "express";
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the ISS API!");
});

app.get('/iss', async (req, res) => {
  try {
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const data = await response.json();
    res.send(`
      <h1>ISS Coordinates</h1>
      <p>Latitude: ${data.latitude}</p>
      <p>Longitude: ${data.longitude}</p>
    `);
  } catch (error) {
    res.status(500).send('Error fetching ISS data');
  }

});

app.listen(port, ()=>{
    console.log(`Server is ruuning at ${port}`);
});
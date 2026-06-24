
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/dashboard",
        element: <Dashboard/>
      },
    ]
  );
  return (
    <>
      <RouterProvider router={router}/>  
    </>
  )
}

export default App

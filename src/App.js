import './App.css';
import react from "react"
import Dashboard from "./components/dashboard/Dashboard";
import CarAdd from "./components/cars/add/CarAdd";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./Root";
import Error from "./components/Error";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";



const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/home",
                element: <Home/>,
            },
            {
                path: "/dashboard",
                element: <Dashboard/>,
            },
            {
                path: "/car/add",
                element: <CarAdd/>,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router}/>
}

export default App;

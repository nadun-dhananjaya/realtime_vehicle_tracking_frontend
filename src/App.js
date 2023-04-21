import './App.css';
import Dashboard from "./components/dashboard/Dashboard";
import CarAdd from "./components/cars/add/CarAdd";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Root";
import RootLayout from "./Root";
import Error from "./components/Error";
import Home from "./components/home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/login",
                element: <Dashboard />,
            },
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/car/add",
                element: <CarAdd />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router-dom"
import Home from "../components/Home/Home"
import AboutHero from "../components/About/AboutHero"
import Layout from "../components/Layout/Layout"
import Services from "../components/Services/Services"
import '../App.css'

export const router = createBrowserRouter([
   {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'about',
            element: <AboutHero />,
        },
        {
            path: 'services',
            element: <Services />,
        },
    ]}
])
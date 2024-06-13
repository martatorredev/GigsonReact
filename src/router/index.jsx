import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import AboutHero from "../components/About/AboutHero";
import Services from "../components/Services/Services";
import Cases from "../components/Pages/Cases/Cases";
import Faqs from "../components/Pages/Faqs/Faqs";
import Contact from "../components/Pages/Contact";
import NotFound from "../components/Pages/NotFound";
import Policity from "../components/Pages/Policity";
import { createBrowserRouter } from "react-router-dom";
import '../App.css';

export const router = createBrowserRouter([
   {
    path: '/',
    element: <Layout />,  // Aquí ya se utiliza Layout
    errorElement: 
    <NotFound/>,
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
        {
            path: 'cases',
            element: <Cases />,
        },
        {
            path: 'faqs',
            element: <Faqs />,
        },
        {
            path: 'contact',
            element: <Contact />,
        },
        {
            path: 'policity',
            element: <Policity />,
        },
    ]}
])

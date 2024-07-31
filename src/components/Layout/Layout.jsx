import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollTop from "../../hooks/ScrollTop";
import CookieBanner from "../../CookieBanner"; // Importamos el nuevo componente

const Layout = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return (
      <>
         <ScrollTop>
            <Navbar />
            <main>
               <Outlet />
            </main>
            <Footer />
            <CookieBanner /> {/* Incluimos el banner de cookies */}
         </ScrollTop>
      </>
   );
};

export default Layout;

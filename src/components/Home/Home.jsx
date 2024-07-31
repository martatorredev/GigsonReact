import React from "react";
import Hero from "./Hero";
import HomeServices from "./HomeServices";
import Form from "../Form";
import HomeCases from "./HomeCases";
import { CtaServices } from "./CtaServices";

//  TODO: Aumentar o tamanho dos ícones, verificar em todos os lugares
//  TODO: Corrigir o tamanho da fonte para que fique igual ao figma

const Home = () => {
   return (
      <div className="home-content">
         <Hero />
         <HomeServices />
         <HomeCases />
         <CtaServices />
         <Form />
      </div>
   );
};

export default Home;

import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { FaqsAccordion } from "./FaqsAccordion/FaqsAccordion";
import cono from "../../../assets/FaqsCono.png";
import pentagono from "../../../assets/FaqsPentagono.png";
import "./Faqs.css";

const Faqs = () => {
   const { t } = useTranslation();
   const title = t("faqsH1");
   const faqsData = t("faqsDropdown");

   const [activeIndex, setActiveIndex] = useState(null);

   const handleItemClick = (index) => setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

   return (
      <section className="faqs-section">
         <div className="hero-faqs">
            <h1 className="hero-faqs-h1">
               <Trans i18nKey={title} components={{ span: <span /> }} />
            </h1>
            <div className="faqs-imgs">
               <img src={pentagono} alt="" />
               <img src={cono} alt="" />
            </div>
         </div>

         {faqsData.map(({ title, question, answer, cta }, i) => {
            const isLast = i === faqsData.length - 1;

            return (
               <div key={i} className="faqs-accordion">
                  <h2 className="faqs-accordion-h2">{title}</h2>
                  <FaqsAccordion
                     i={i}
                     question={question}
                     answer={answer}
                     isOpen={activeIndex === i}
                     onClick={() => handleItemClick(i)}
                     isLast={isLast}
                     cta={cta}
                  />
               </div>
            );
         })}
      </section>
   );
};

export default Faqs;

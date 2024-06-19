import { Trans, useTranslation } from "react-i18next"
import {FaqsAccordion} from "./FaqsAccordion/FaqsAccordion"
import cono from "../../../assets/FaqsCono.png"
import pentagono from "../../../assets/FaqsPentagono.png"
import './Faqs.css'
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'

const Faqs = () => {
  const {t} = useTranslation()
  const title = t("faqsH1")
  const faqsData = t("faqsDropdown")

  return (
    <section className="faqs-section">
      <div className="hero-faqs">
        <h1 className='hero-faqs-h1'>
          <Trans 
            i18nKey={title}
            components={{span: <span />}}
          />
        </h1>
        <div className="faqs-imgs">
          <img src={pentagono} alt="" />
          <img src={cono} alt="" />
        </div>
      </div>
      {faqsData.map(({title, question, answer, cta}, i) => {
  const isLast = i === faqsData.length - 1; // Verifica si es la última tarjeta

  return (
    <div key={i} className="faqs-accordion">
      <h2 className="faqs-accordion-h2">{title}</h2>
      <FaqsAccordion
        question={question}
        answer={
          <>
            {answer}
            {isLast && (
              <div className='faq-button-wrapper'>
                <Link to='/contact' className='about-hero-btn button-main'>{cta}</Link>
              </div>
            )}
          </>
        }
      />
    </div>
  );
})}

      
    </section>
  )
}

export default Faqs
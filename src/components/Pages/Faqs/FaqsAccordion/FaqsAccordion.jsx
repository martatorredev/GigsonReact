import {useState} from 'react'
import { AccordionAnimation } from '../../../Accordion/AccordionAnimation'

export const FaqsAccordion = ({question, answer}) => {
    const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <>
        {question &&
            <div className='accordion-container faqs-container' onClick={() => setAccordionOpen(!accordionOpen)}>
                <button 
                    className='accordion-btn'
                >
                    <span className='accordion-title'>{question}</span>
                    <AccordionAnimation accordionOpen={accordionOpen} faqs="faqs" />
                </button>
                <div className={`accordion-content ${
                    accordionOpen && 'accordion-show-content' 
                }`}>
                    <div className="accordion-content-text">
                        {answer}
                    </div>
                </div>
            </div>
        }
    </>
  )
}
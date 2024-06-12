import {useState} from 'react'
import { AccordionAnimation } from './AccordionAnimation'
import './Accordion.css'

export const Accordion = ({
    title, subTitle, challenge,
    features, solution, tools, 
    featuresTitle, solutionTitle
}) => {
    const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div className='accordion-container' onClick={() => setAccordionOpen(!accordionOpen)}>
        <button 
            className='accordion-btn'
        >
            <span className='accordion-title'>{title}</span>
            <AccordionAnimation accordionOpen={accordionOpen}/>
        </button>
        <div className={`accordion-content ${
            accordionOpen && 'accordion-show-content' 
        }`}>
            <div className="accordion-content-text">
                {subTitle && <h3 className='cases-dropdown-subtitle'>{subTitle}</h3>}
                <div className={!subTitle ? 'oadljkgvbadojgbaed' : 'without-border'}>
                    <p className='cases-dropdown-challenge'>{challenge}</p>
                    <div className="cases-dropdown-features">
                        <h4>{featuresTitle}</h4>
                        <ul>
                            {features.map((feature, i) =>
                                <div key={i}>
                                    <span></span>
                                    <li>
                                        {feature}
                                    </li>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="cases-dropdown-solution">
                    <div>
                        <h4>{solutionTitle}</h4>
                        <p>{solution}</p>
                    </div>
                    <ul className='cases-dropdown-tools'>
                        {tools.map((tool, i) =>
                            <div key={i}>
                                <span></span>
                                <li >
                                    {tool}
                                </li>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
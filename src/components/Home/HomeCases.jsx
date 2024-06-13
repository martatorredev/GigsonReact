import React from 'react'
import './Homecases.css'
import cubeSvg from '../../assets/cubo-about.svg'
import piraSvg from '../../assets/Piramide-about.svg'
import circSvg from '../../assets/circulo-about.svg'
import {Link} from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import { useState } from 'react'
import CasesBg from '../../assets/CasesBg.png'
import { Accordion } from '../../components/Accordion/Accordion.jsx'
import '../Pages/Cases/Cases.css'
import '../Pages/Cases/Cases.jsx'

const HomeCases = () => {
    const {t} = useTranslation()
    const {title, description, cta, titleH2, belive, need} = t("about")
    const {t1, t2, t3, p1, p2, p3} = belive
    const {specialist1, specialist2, specialist3, specialist4, 
        specialist5, specialist6, specialist7, specialist8, specialist9, label, cta2} = need

    const dataBelive = [
        {img: cubeSvg, title: t1, description: p1},
        {img: piraSvg, title: t2, description: p2},
        {img: circSvg, title: t3, description: p3}
    ]

    const dataSpecialist = [
        {title: "Product Manager", desc: specialist1},
        {title: "FullStack", desc: specialist2},
        {title: "Solution Architect", desc: specialist3},
        {title: "Backend Developer", desc: specialist4},
        {title: "Business Analyst", desc: specialist5},
        {title: "Frontend Developer", desc: specialist6},
        {title: "Quality Assurance", desc: specialist7},
        {title: "UX/UI Designer", desc: specialist8},
        {title: "Security Engineer", desc: specialist9},
    ]
    
    const {wth2,wp1,wp2,wlink}=t("caseswhygigson")

    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedNeeds, setSelectedNeeds] = useState([]);

    const {heroH1, heroP, featuresTitle,
           tagTitle, needTitle, resetFilters, 
           solutionTitle, toolsTitle} = t("cases")
    const cases = t("casesDropdown")
    const {contact} = t("ctas")
  
    const uniqueTags = [...new Set(cases.map(({tags}) => tags).flat())];
    const uniqueNeeds = [...new Set(cases.map(({need}) => need).flat())];
  
    const handleTagFilter = (tag) => {
      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    };
    
    const handleNeedFilter = (need) => {
      if (selectedNeeds.includes(need)) {
        setSelectedNeeds(selectedNeeds.filter((n) => n !== need));
      } else {
        setSelectedNeeds([...selectedNeeds, need]);
      }
    };
  
    const handleResetFilters = () => {
      setSelectedTags([]);
      setSelectedNeeds([]);
    };
  
    const filteredCases = cases.filter(
      (caseItem) =>
        (selectedTags.length === 0 || caseItem.tags.some((tag) => selectedTags.includes(tag))) &&
        (selectedNeeds.length === 0 || caseItem.need.some((need) => selectedNeeds.includes(need)))
    );

  return (
<>
    <section className='cases-why-gigson'>
        <h2> 
          <Trans 
            i18nKey={wth2}

          />
        </h2>
        <div>
          <p>
          <Trans 
            i18nKey={wp1}

          />
          </p>
          <p>
            <Trans 
              i18nKey={wp2}

            />
          </p>
          <Link to='/contact' className='button-main why-gigson-btn'>
          <Trans 
            i18nKey={wlink}

          />
          </Link>
        </div>
      </section>
    <section>
        <div className="home-case-flex">

        
            <div className='home-hero-cases'>
                <img src={CasesBg} alt="" className='cases-img'/>
                <section className='home-hero-cases'>
                  <h1 className='home-hero-cases-h1'>
                    <Trans 
                      i18nKey={heroH1}
                      components={{span: <span />}}
                    />      
                  </h1>
                  <p className='home-hero-cases-p'>{heroP}</p>
                </section>
            </div>
            <div className="case-selector-flex">
                <h3 className='home-cases-filters-title'>{tagTitle}</h3>
                <div className="home-cases-container-filters">
                    {uniqueTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagFilter(tag)}
                        className={`button-main filters-btn ${selectedTags.includes(tag) && 'filter-btn-active'}`}
                      >
                        {tag}
                      </button>
                    ))}
                </div>

                <h3 className='home-cases-filters-title'>{needTitle}</h3>
                <div className="home-cases-container-filters">
                {uniqueNeeds.map((need) => (
                  <button
                    key={need}
                    onClick={() => handleNeedFilter(need)}
                    className={`button-main filters-btn ${selectedNeeds.includes(need) && 'filter-btn-active'}`}
                  >
                    {need}
                  </button>
                ))}
            </div>

          <button className='cases-reset-filters' onClick={handleResetFilters}>{resetFilters}</button>
            </div>

          
        </div>
          {filteredCases.map(({title, subTitle, challenge, features, solution, tools}, i) => 
            <div key={i}>
              <Accordion 
                title={title}
                subTitle={subTitle}
                challenge={challenge}
                features={features}
                solution={solution}
                tools={tools}
                featuresTitle={featuresTitle}
                solutionTitle={solutionTitle}
                toolsTitle={toolsTitle}
              />
            </div>
          )}

        </section>       
</>
  )
}

export default HomeCases
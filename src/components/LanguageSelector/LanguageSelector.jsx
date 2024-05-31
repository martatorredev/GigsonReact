import { useTranslation } from "react-i18next"

const languages = [
    {code: "en", lang: "EN"},
    {code: "es", lang: " / ES"},
]

const LanguageSelector = () => {
    const {i18n} = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

  return (
    <div style={{display: 'flex'}}>
        {
            languages.map(({code, lang}, i) => 
            <ul key={i} style={{cursor: 'pointer'}}>
                <li 
                    className={code === i18n.language ? 'spam-lng' : ''}
                    onClick={() => changeLanguage(code)}
                >
                    {lang}
                </li>       
            </ul>
        )}
    </div>  
  )
}
export default LanguageSelector

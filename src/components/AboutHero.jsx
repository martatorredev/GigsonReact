import './AboutHero.css'
import '../components/Home/Hero.css'
import Button from './Button'

const AboutHero = () => {
  return (
    <main>
        <section className='div-about-hero'>
            <h1 className='about-hero-h1'>Our team is built by professionals with more than <span>9 Years</span>  of experience.  </h1>
            <p className='about-hero-p'>We have the required profiles to face the end-to-end digital product development to offer an all-in-one service.</p>
            <Button name='LET’S TALK' classStyle='about-hero-btn' />
            <svg width='100%' className='BackGroudAboutHero' viewBox="0 0 19 8" xmlns="http://www.w3.org/2000/svg">
            </svg>    
        </section>
        <section className='div-about-belive'>
            <h2 className='about-hero-h2'>What be believe</h2>
            <article>
                <svg width="59" height="47" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.4622 10.5889L3 10.5889L3 46H38.4622V10.5889Z" stroke="#7874F4" stroke-miterlimit="10"/>
                    <path d="M56.6479 1.00002L38.4623 10.5889V46L56.6479 36.4111V1.00002Z" stroke="#7874F4" stroke-miterlimit="10"/>
                    <path d="M21.1856 1.00002L3 10.5889L3 46L21.1856 36.4111L21.1856 1.00002Z" stroke="#7874F4" stroke-miterlimit="10"/>
                    <path d="M56.4897 1.07959L21.0276 1.07959L3 10.5891L38.4622 10.5891L56.4897 1.07959Z" stroke="#7874F4" stroke-miterlimit="10"/>
                    <path d="M56.4897 36.4907H21.0276L3 46.0003H38.4622L56.4897 36.4907Z" stroke="#7874F4" stroke-miterlimit="10"/>
                </svg>
                <span>1</span>
                <h3>Quality</h3>
                <p>Regardless of whether we're crafting a proof of concept or a final product, we apply various product quality and project management standards to ensure that every product meets and exceeds expectations.</p>
            </article>

            <article>
                <svg width="58" height="46" viewBox="0 0 58 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M55.5291 36.4773L20.6515 34.6371L2.42756 43.0545L37.3052 44.8946L55.5291 36.4773Z" stroke="#7874F4" stroke-miterlimit="10"/>
                    <path d="M1.99998 43.0716L30.2421 1.37017M30.2421 1.37017L36.9956 44.918M30.2421 1.37017L55.0655 36.5026M30.2421 1.37017L20.3866 34.6729" stroke="#7874F4"/>
                </svg>

                <span>2</span>
                <h3>Commitment</h3>
                <p>You'll have the flexibility to choose the level of engagement you prefer with us. We'll always be by your side to support you at any stage, but if you decide not to continue, we'll handle the closure and necessary handover, complying with all current legal requirements.</p>
            </article>
            
            <article>
                <svg width="65" height="74" viewBox="0 0 65 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.4265 68.0809C49.7829 68.0809 63.853 54.0108 63.853 36.6544C63.853 19.298 49.7829 5.22791 32.4265 5.22791C15.0701 5.22791 1 19.298 1 36.6544C1 54.0108 15.0701 68.0809 32.4265 68.0809Z" stroke="#7874F4" stroke-miterlimit="10"/>
                    <path d="M44.7024 65.587C48.7968 63.8499 46.6206 49.4891 39.8417 33.5113C33.0628 17.5334 24.2483 5.98908 20.1538 7.72622C16.0594 9.46335 18.2356 23.8242 25.0145 39.802C31.7934 55.7798 40.608 67.3242 44.7024 65.587Z" stroke="#7874F4" stroke-miterlimit="10"/>
                    <path d="M43.0317 66.2348C53.9217 62.3313 58.0021 45.922 52.1457 29.5835C46.2892 13.245 32.7135 3.16441 21.8235 7.06788C10.9336 10.9714 6.85307 27.3807 12.7095 43.7192C18.566 60.0577 32.1417 70.1382 43.0317 66.2348Z" stroke="#7874F4" stroke-miterlimit="10"/>
                </svg>

                    <span>3</span>
                    <h3>Security</h3>
                    <p>Security is essential to us. We offer the ability to audit and certify our cloud solutions with CIS, CISA, FedRAMP, PCI-DSS, GDPR, FFIEC, and SOC2.</p>
            </article>

        </section>        
    </main>
  )
}

export default AboutHero
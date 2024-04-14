import './Form.css'
import Button from './Button.jsx'


const Form = () => {
  return (
    <section className='form-section'>
        <h2 className='form-h2'>Ready to help you</h2>

        <form className='form'>
            <div className='input-name'>
                <label htmlFor="name">Mi name is</label>
                <input type="text" required placeholder='Name and lastname'/>
            </div>
            <div>
            <label htmlFor="name">And I’m interested in</label>
                <select type="text" required placeholder='Service'>
                    <option value="">Service</option>
                    <option value="1">Servicio1</option>
                    <option value="2">Servicio2</option>
                    <option value="3">Servicio3</option>
                </select>
            </div>
            <div>
                <label htmlFor="name">The budget for my idea is</label>
                <ul className='form-budget'>
                    <li><Button name='< 10k€' classStyle='form-btn-budget'/></li>
                    <li><Button name='< 25k€' classStyle='form-btn-budget'/></li>
                    <li><Button name='< 50k€' classStyle='form-btn-budget'/></li>
                    <li><Button name='no idea' classStyle='form-btn-budget'/></li>
                </ul>
            </div>
            <div>
                <label htmlFor="name">My email is</label>
                <input type="email" required placeholder='name@example.com'/>
            </div>
            <div>
                <label htmlFor="text">A short project description (optional):</label>
                <input type="text" placeholder='Project details'/>
            </div>
            <div className='form-check'>
                <input type="checkbox" required className='input-radio'/>
                <label htmlFor="checkbox">I have read the legal desclaimer and agree to the processing of my personal data.</label>
                
            </div>
            <Button name='SEND' classStyle='form-btn-send'/>
        </form>
    </section>
  )
}

export default Form
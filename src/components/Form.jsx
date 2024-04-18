import './Form.css'
import Button from './Button.jsx'


const Form = () => {
  return (
    <section className='form-section'>
        <h2 className='form-h2'>Ready to help you</h2>

        <form className='form'>
            <div className="form-container">
                <div className='input-container'>
                    <label htmlFor="name">My name is</label>
                    <input type="text" required placeholder='Name and lastname'/>
                </div>
                <div className='input-container'>
                <label htmlFor="name">And I'm interested in</label>
                    <select type="text" required placeholder='Service'>
                        <option value="">Service</option>
                        <option value="1">Servicio1</option>
                        <option value="2">Servicio2</option>
                        <option value="3">Servicio3</option>
                    </select>
                </div>
                <div className='input-container '>
                    <label className='label-budget' htmlFor="name">The budget for my idea is</label>
                    <ul className='form-budget'>
                        <li><Button name='< 10k€' classStyle='form-btn-budget' /></li>
                        <li><Button name='< 25k€' classStyle='form-btn-budget' /></li>
                        <li><Button name='< 50k€' classStyle='form-btn-budget' /></li>
                        <li><Button name='no idea'classStyle='form-btn-budget' /></li>
                    </ul>
                </div>
                <div className='input-container'>
                    <label htmlFor="name">My email is</label>
                    <input type="email" required placeholder='name@example.com'/>
                </div>
                <div className='input-container'>
                    <label htmlFor="text">A short project description (optional):</label>
                    <input type="text" placeholder='Project details'/>
                </div>
                <div className='input-container form-check'>
                    <input type="checkbox" required className='input-radio'/>
                    <label htmlFor="checkbox">I have read the legal desclaimer and agree to the processing of my personal data.</label>
                </div>
            </div>  
            <Button type="submit" name='SEND' classStyle='form-btn-send'/>
        </form>
    </section>
  )
}

export default Form
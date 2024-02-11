import './Footer.css';

export default function Footer(){
    return (
        <div className='f1'>
            <div className='f2'>
                <div>
                    <h1 className='f3'>Contact</h1>
                </div>
                <div>
                    <p className='f4'>I would love to hear about your project<br></br> and how I could help.Please fill in the form,<br></br> and I'll get back to you as soon as possible.</p>
                </div>
            </div>
            <div>
                <div className='f5'>
                    <div>
                        <input className='f6' placeholder='Name' type='text'></input>
                    </div>
                    <div>
                    <input className='f6' placeholder='Email' type='email'></input>
                    </div>
                    <div>
                    <textarea id="txtid" name="txtname" rows="4" cols="40" maxlength="200" className='f6' placeholder='Message'></textarea>
                    </div>
                    <div className='f7'>
                        <button className='f8'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
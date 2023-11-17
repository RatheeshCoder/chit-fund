import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kli8s2n', 'template_9aez2qp', form.current, 'Vrq45MC3_UMSVzZRK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return ( <section className='ContactMain'>
  <div className='item'>
   <div className='content'> 
    <h1> 
    Kopuram Chits - Hub For High Returns With Less Investment - Contact Us
    </h1>
   </div>
   <div className="ContactUs">
   <form ref={form} onSubmit={sendEmail} >
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Contact Number</label>
    <input type="text" name="user_contact" />
    <label>Occupation</label>
    
    <select name="user_occupation" >
      <option>Salaried</option>
      <option>Self-Finance</option>
      <option>Other</option>
    </select>
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
  </div>
  </div>
</section>

   
  )
}

export default  ContactUs
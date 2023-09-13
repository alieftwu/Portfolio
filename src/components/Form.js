import "./FormStyles.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d9h4kxu', 'template_8a5eq5n', form.current, 'S3n31esKRR2iw0H5S')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className ="form">
        
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Your Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  )
}

export default Form
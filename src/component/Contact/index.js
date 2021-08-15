import React from 'react';
import {ContactSection, ContactTitle, TitleSpan, ContactForm, FormGroup, InputText,
   InputEmail, InputFull, FormTextarea, InputSubmit} from './style.js';

const  Contact = () => {
  return (
    <ContactSection>
            <div className="container">
                <ContactTitle><TitleSpan>Drop </TitleSpan>Me A line</ContactTitle>
                <ContactForm action="">
                    <FormGroup>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormGroup>
                    <InputFull type="text" className="sub" placeholder="Your Subject"/>
                    <FormTextarea cols="30" rows="10" placeholder="Your Message"></FormTextarea>
                    <InputSubmit type="submit" value="Send Message"/>
                </ContactForm>
            </div>
        </ContactSection>
  );
}
export default Contact;
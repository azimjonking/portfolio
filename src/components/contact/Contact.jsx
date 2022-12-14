import React from 'react';
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_cnlze07',
            'template_ch9jzci',
            formRef.current,
            '7Y0QxQwwq55YHq0jE')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="c-icon"
                            />
                            +1 1234 55 66
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Email}
                                alt=""
                                className="c-icon"
                            />
                            contact@lama.dev
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Address}
                                alt=""
                                className="c-icon"
                            />
                            245 King Street, Touterie Victoria 8520 Australia
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What???s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            style={{
                                backgroundColor: darkMode && "#333",
                                color: darkMode && "white",
                            }}
                            type="text"
                            placeholder='Name'
                            name="user_name" />
                        <input
                            style={{
                                backgroundColor: darkMode && "#333",
                                color: darkMode && "white",
                            }}
                            type="text"
                            placeholder='Subject'
                            name="user_subject" />
                        <input
                            style={{
                                backgroundColor: darkMode && "#333",
                                color: darkMode && "white",
                            }}
                            type="text"
                            placeholder='Email'
                            name="user_email" />
                        <textarea
                            style={{
                                backgroundColor: darkMode && "#333",
                                color: darkMode && "white",
                            }}
                            rows="5"
                            placeholder='Message'
                            name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
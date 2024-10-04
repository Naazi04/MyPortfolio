import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        const { from_name, reply_to, message } = form.current;
        if (!from_name.value || !reply_to.value || !message.value) {
            setNotDone(true);
            return;
        }

        // Reset notDone state
        setNotDone(false);
        setDone(true);

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                // Show success message
            }, (error) => {
                console.log(error.text);
                // Handle error case
            });

        // Reset form after submission
        form.current.reset();
    };

    return (
        <Container style={{ paddingTop: '50px' }}>
            <Row>
                <Col md={6} className="c-left">
                    <h1>Get in Touch</h1>
                    <h1 className="yellow">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" className="user" placeholder="Name" />
                        <input type="email" name="reply_to" className="user" placeholder="Email" />
                        <textarea name="message" className="user" placeholder="Message" />
                        <span className='not-done'>{notDone && "Please, fill all the input fields"}</span>
                        <Button type="submit" className="button" disabled={done}>Send</Button>
                        <span className='done'>{done && "Thanks for contacting me! For earlier reply kindly connect me through LinkedIn directly."}</span>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;

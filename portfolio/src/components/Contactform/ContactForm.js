import "./ContactForm.css";
import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="wrapperContactForm">
        <h1 className="myProjectTitle"> Contact Me </h1>
      <div className="contactForm">
        <form onSubmit={handleSubmit}>
          <div>
            <MDBInput type="text" placeholder="Name" id="name" required />
          </div>
          <div>
            <MDBInput
              type="email"
              placeholder="Ihre E-Mail"
              id="email"
              required
            />
          </div>
          <div>
            <MDBInput
              type="text"
              placeholder="Ihre Nachricht"
              id="message"
              required
            />
          </div>
          <MDBBtn rounded className='mx-2' color='secondary' type="submit">{status}</MDBBtn>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

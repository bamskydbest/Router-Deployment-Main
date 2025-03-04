import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBtn = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert("All fields must be filled");
      return;
    }

    const contactData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/contact-us",
        contactData
      );
      alert("Registration with axios is successful !!! ");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Registration with axios is unsuccessful!!!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <p className="">
        Email us with any questions or enquires or call 09032320786, We will be
        happy to interact with you or set up a meeting with you. This website
        can help you achieve your dreams.
      </p>

      <form onSubmit={handleBtn}>
        <div className="">
          {" "}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="">
          {" "}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          {" "}
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Inquiry for ?"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="">
          {" "}
          <label htmlFor="message">Message</label>
          <input
            type="textarea"
            id="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit">{loading ? "Submitting" : "Submit"}</button>
      </form>
    </div>
  );
};

export default ContactUs;

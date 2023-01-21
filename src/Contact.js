import React from 'react';

function Contact() {
  return (
    <form>
      <h2>Contact Me</h2>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" required />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;

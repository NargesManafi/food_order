import '../STYLE/form.css'

import { useEffect, useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name) {
      errors.name = 'Please enter your name';
    }
    if (!email.includes('@') || !email.includes('.')) {
      errors.email = 'Please enter a valid email address';
    }
    if (!message) {
      errors.message = 'Please enter your message';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setName('');
    setEmail('');
    setMessage('');
    setErrors({ success: 'Your message has been sent successfully' });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrors({});
    }, 5000);
    return () => clearTimeout(timeout);
  }, [errors]);

  return (
    <div>
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact__form">
          {errors.success && (
            <div className="alert alert-success" role="alert">
              {errors.success}
            </div>
          )}
          <div className="form-item">
            <div>
              <label>Full Name</label>
            </div>
            <input value={name} onChange={handleName} type="text" placeholder="Enter full name..." />
            {errors.name && <div className="alert alert-danger">{errors.name}</div>}
          </div>
          <div className="form-item">
            <div>
              <label>Email</label>
            </div>
            <input value={email} onChange={handleEmail} type="email" placeholder="Enter Email..." />
            {errors.email && <div className="alert alert-danger">{errors.email}</div>}
          </div>
          <div className="form-item">
            <label>Message</label>
            <textarea value={message} onChange={handleMessage} cols="30" rows="10" placeholder="Enter message..."></textarea>
            {errors.message && <div className="alert alert-danger">{errors.message}</div>}
          </div>
          <button className="form__button" type="submit" onClick={handleSubmit}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
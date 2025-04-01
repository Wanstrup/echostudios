import React, { useState } from 'react';
import './Book.css';  // Importér CSS-filen for styling
import logo from './assets/echologo.png';  // Importer logo-billedet (erstat stien med din egen)

function BookMeeting() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} on ${date} at ${time}.`);
  };

  return (
    <div className="booking-container">
      {/* Navbar - direkte indsat i BookMeeting */}
      <header>
        <nav>
          <a href="/main" className="logo-link">
            <img src={logo} alt="MyWebsite Logo" className="logo" />
          </a>
          <ul>
            <li><a href="/hvorforos">Hvorfor os</a></li>
            <li><a href="/omos">Om os</a></li>
            <li><a href="/book">Book et møde</a></li>
          </ul>
        </nav>
      </header>

      {/* Booking Formular */}
      <div className="booking-form-container">
        <h1>Book et møde</h1>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Navn:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Dato:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Tidspunkt:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Besked:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-btn">Book møde</button>
        </form>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default BookMeeting;

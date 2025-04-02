import React from 'react';
import { Link } from 'react-router-dom'; 
import './WebPage.css';

function WebPage() {
  return (
    <div className="webpage">
      {/* Header with Navbar */}
      <header>
        <nav>
          <div className="logo">MyWebsite</div>
          <ul>
            {/* Brug Link i stedet for almindelige a-tags */}
            <li><Link to="/hvorforos">Hvorfor os</Link></li>
            <li><Link to="/omos">Om os!</Link></li>
            <li><Link to="/book">Book et møde</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <h1>Echo Studio</h1>
        <div className="content">
          <p>
            This is a simple webpage created using React. 
            It includes a header with a navigation bar, 
            a main content section, and a footer.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default WebPage;
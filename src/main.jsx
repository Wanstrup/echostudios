import React from 'react'
import './WebPage.css'
import App from './App'

function WebPage() {
  return (
    <div className="webpage">
      {/* Header with Navbar */}
      <header>
        <nav>
          <div className="logo">MyWebsite</div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <h1>Welcome to My Website</h1>
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
  )
}

export default WebPage
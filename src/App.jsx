import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importer Router og Routes
import WebPage from './main.jsx';
import BookMeeting from './book.jsx';
import HvorforOs from './hvorforos.jsx';
import OmOs from './omos.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Definer alle de ruter, der svarer til de sider, du vil navigere til */}
        <Route path="/main" element={<WebPage />} />
        <Route path="/hvorforos" element={<HvorforOs />} />
        <Route path="/omos" element={<OmOs />} />
        <Route path="/book" element={<BookMeeting />} />
      </Routes>
    </Router>
  );
}

export default App;
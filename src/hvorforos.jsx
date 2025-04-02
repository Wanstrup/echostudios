import React from 'react';
import './HvorforOs.css';
import logo from './assets/echologo.png';

// Importér billederne
import image1 from './assets/test1.jpg';
import image2 from './assets/test2.jpg';
import image3 from './assets/test3.jpg';

function HvorforOs() {
  return (
    <div className="hvorforos-page">
      {/* Header */}
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

      {/* Main Content med Grid Layout */}
      <main className="hvorforos-content">
        <h1>Hvorfor vælge os?</h1>
        
        {/* Første sektion: Tekst til venstre, billede til højre */}
        <section className="grid-section">
          <div className="text-content">
            <h2>Ekspertise og erfaring</h2>
            <p>
              Vi har mere end 10 års erfaring inden for branchen. Vores dedikerede team af eksperter er passionerede omkring at levere de bedste løsninger til vores kunder. Vi fokuserer på kvalitet, innovation og kundetilfredshed.
            </p>
            <p>
              Hvad gør os anderledes? Det er vores unikke tilgang til hvert projekt. Vi lytter til dine behov, analyserer dine udfordringer og skaber skræddersyede løsninger, der passer præcist til dine ønsker og mål.
            </p>
          </div>
          <div className="image-content">
            <img src={image1} alt="Ekspertise og erfaring" />
          </div>
        </section>
        
        {/* Anden sektion: Billede til venstre, tekst til højre */}
        <section className="grid-section alternate">
          <div className="image-content">
            <img src={image2} alt="Innovative løsninger" />
          </div>
          <div className="text-content">
            <h2>Innovative løsninger</h2>
            <p>
              Vi er stolte af at være på forkant med den seneste teknologi og trender. Vores innovative løsninger hjælper dig med at skille dig ud fra konkurrenterne og opnå dine forretningsmål.
            </p>
            <p>
              Vores team af kreative tænkere og tekniske eksperter samarbejder om at udvikle unikke koncepter, der ikke kun løser dine nuværende udfordringer, men også positionerer din virksomhed til fremtidig succes.
            </p>
          </div>
        </section>
        
        {/* Tredje sektion: Tekst til venstre, billede til højre */}
        <section className="grid-section">
          <div className="text-content">
            <h2>Kundefokus og resultater</h2>
            <p>
              Din succes er vores succes. Vi går ud over det sædvanlige for at sikre, at du får maksimal værdi af vores samarbejde. Vi måler vores succes på de resultater, vi leverer til vores kunder.
            </p>
            <p>
              Med en portefølje af tilfredse kunder og succesfulde projekter, er vi klar til at hjælpe dig med at opnå dine mål. Lad os samarbejde om at skabe de resultater, du drømmer om.
            </p>
          </div>
          <div className="image-content">
            <img src={image3} alt="Kundefokus og resultater" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HvorforOs;
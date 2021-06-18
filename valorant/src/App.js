import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <body>
        <LandingPage />
        
      </body>

      <footer>

      </footer>
      
    </div>
  );
}

export default App;

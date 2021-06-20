import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from "./components/Navbar"
import News from "./components/News"
import Trailer from "./components/Trailer"

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <body>
        <LandingPage />
        <News />
        <Trailer />
        
      </body>

      <footer>

      </footer>
      
    </div>
  );
}

export default App;

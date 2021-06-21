import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from "./components/Navbar"
import News from "./components/News"
import Trailer from "./components/Trailer"
import Agents from "./components/Agents"

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
        <Agents />
        
      </body>

      <footer>

      </footer>
      
    </div>
  );
}

export default App;

import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Trailer from "./components/Trailer";
import Agents from "./components/Agents";
import Maps from "./components/Maps";
import Footer from "./components/Footer";

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
        <Maps />
        <Footer />
      </body>

      <footer></footer>
    </div>
  );
}

export default App;

// Questions

// 1. Why is it that the video no longer covers the full screen?
// Tried adjusting the padding of the navbar bg and seemed to work out

// 2. Why is it that there are violet dashes in between the navbar items?
// 3. Why is it that when i hover over the nav-items the rise up and down?
// 4. Why is it that the font family for the 'Latest news' does not respond even though i have installed the font?
// 5. Why is it there is a white line/dash in-between the news section and the trailer section?

//  footer section links refuse to style; why is that so?
// when i include the 'a' tag, it styles but not in relation to the style i used; WHYYYYY??

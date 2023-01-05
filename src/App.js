import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

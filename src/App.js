import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Blog from './components/Blog';
import Error from './components/Error';
import Main from './components/Main';
import Services from './components/Services';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}


export default App;

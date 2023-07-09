import './STYLE/main.css';

import { Route, Routes } from "react-router-dom";

import About from './components/About';
import Contact from './components/Contact';
import Details from './components/Detail';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

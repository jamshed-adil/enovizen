import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesStrip from './components/ServicesStrip';
import About from './components/About';
import ServiceSectors from './components/ServiceSectors';
import ServicesGallery from './components/ServicesGallery';
import ChooseUs from './components/ChooseUs';
import GetQuote from './components/GetQuote';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <ServicesStrip />
      <About />
      <ServiceSectors />
      <ServicesGallery />
      <ChooseUs />
      <GetQuote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

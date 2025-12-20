import Testimonials from "./sections/Testimonials";
import InterestBlock from "./sections/InterestBlock";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Navbar from "./components/NavBar";
import FloatingTelegramButton from "./components/FloatingTelegramButton";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Experience />
    <InterestBlock />
    <Testimonials />
    <FloatingTelegramButton />
  </>
);

export default App;

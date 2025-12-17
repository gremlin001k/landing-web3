import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Navbar from "./components/NavBar";
import FloatingTelegramButton from "./components/FloatingTelegramButton";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Experience />
    <Testimonials />
    <FloatingTelegramButton />
  </>
);

export default App;

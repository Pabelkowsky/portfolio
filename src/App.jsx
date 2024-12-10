import LoadingScreen from "./components/LoadingScreen"
import Main from "./components/Main"
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import BurgerMenu from "./components/BurgerMenu";
import Promotion from "./components/Promotion";
import Contact from "./components/Contact";
import Lenis from 'lenis'
import Footer from "./components/Footer";


function App() {

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


  return (
    <>
      <Main />
      <Services />
      <Gallery />
      <Promotion />
      <Contact />
      <Footer />
    </>
  )
}

export default App

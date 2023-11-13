import Menu from "./components/Menu/Menu";
import Slider from "./components/Slider/Slider";
import Products from "./components/Products/Products";
import Custom from "./components/CustomProductSlider/Custom";
import Category from "./components/Category/Category";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
  <>
     <Menu/> 
     <Slider/>
     <Products/>
     <Custom/>
     <Category/>
     <ContactUs/>
     <AboutUs/>
  </>);
}

export default App;
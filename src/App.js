import './App.css';
import Header from './Components/Layouts/Header';
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import Footer from './Components/Layouts/Footer';
import Blockchain from './Components/Elements/Blockchain';
import Interoperability from './Components/Elements/Interoperability';
import Developer from './Components/Elements/Developer';
import Interprises from './Components/Elements/Interprises';
import Designed from './Components/Elements/Designed';
import Hero from './Components/Elements/Hero';
import Empowered from './Components/Elements/Empowered';
import Future from './Components/Elements/Future';
import Financial from './Components/Elements/Financial';
import Explore from './Components/Elements/Explore';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Create from './Components/Elements/Create';
// ..
AOS.init({duration: 2000});







function App() {
  return (
    <div >
      <Header/>
      <Hero/>
      <Blockchain/>
      <Empowered/>
      <Financial/>
      <Create/>
      <Explore/>
      <Interoperability/>
      <Developer/>
      <Interprises/> 
      <Designed/> 
      <Future/>    
      <Footer/>
    </div>
  );
}

export default App;

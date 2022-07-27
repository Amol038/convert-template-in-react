import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './component/header/home';
import About from './component/header/about';
import Doctor from './component/header/doctor';
import Services from './component/header/service';
import Blog from './component/header/blog';
import Contact from './component/header/contact';
import Error from './component/header/error';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="!" element={<Error/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

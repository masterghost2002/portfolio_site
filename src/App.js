import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    {/* <Skills/> */}
    <Projects/>
    <Contact/>
    </>
    
  );
}

export default App;

import '../src/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Gallery from './pages/gallery.jsx'
import Portfolio from './pages/portfolio.jsx'
import Contact from './pages/contact.jsx'
function App() {
  return (
    <BrowserRouter>
    <Sidebar>     
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/contact' element={<Contact/>} />
      </Routes>
      </Sidebar>
</BrowserRouter>
  );
}

export default App;

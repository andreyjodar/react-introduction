import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Home from './pages/home/Home.jsx';
import Calculadora from './pages/calculadora/Calculadora.jsx';

function App() {
  return (
    <>
      <Header nome="Andrey"/>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component = {Home}/>
          <Route path='/calculadora' Component = {Calculadora}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;

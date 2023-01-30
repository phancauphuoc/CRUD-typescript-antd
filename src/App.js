import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Router from '../src/Router.tsx';
import MenuSlider from './pages/MenuSlider.tsx';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <MenuSlider />
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Page from './pages/HomePage';
import Hotels from './pages/HotelsPage';
import Hotel from './pages/HotelPage';
import Rooms from './pages/RoomsPage';
import Footer from './components/Footer';
import HotelRoomsPage from './pages/HotelRoomsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route exact path="/hotels" element={<Hotels />} />
          <Route exact path="/rooms" element={<Rooms />} />
          <Route exact path="/hotel/:slug" element={<Hotel />} />
          <Route exact path="/hotel/:slug/rooms-and-suites" element={<HotelRoomsPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

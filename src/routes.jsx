import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import PageNotFound from './pages/PagNotFound';
import EventPage from './pages/Event';
import FindEventsPage from './pages/FindEvents';

import ScrollToTop from './components/ScrollToTop';
import MenuNavBar from './components/MenuNavBar';
import Footer from './components/Footer';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MenuNavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/events/find" element={<FindEventsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;

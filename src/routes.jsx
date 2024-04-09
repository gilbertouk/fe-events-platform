import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/PagNotFound';

import ScrollToTop from './components/ScrollToTop';
import MenuNavBar from './components/MenuNavBar';
import Footer from './components/Footer';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MenuNavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;

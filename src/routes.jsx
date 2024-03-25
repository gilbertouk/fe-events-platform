import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PageNotFound from './pages/PagNotFound';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

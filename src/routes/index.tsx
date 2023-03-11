import { Route, Routes } from 'react-router-dom';
import { Home, Instalacao } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instalando" element={<Instalacao />} />
    </Routes>
  );
};

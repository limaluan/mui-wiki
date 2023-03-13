import { Route, Routes } from 'react-router-dom';
import { Usando, Home, Instalacao, Geral } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instalando" element={<Instalacao />} />
      <Route path="/usando" element={<Usando />} />
      <Route path="/geral" element={<Geral />} />
    </Routes>
  );
};

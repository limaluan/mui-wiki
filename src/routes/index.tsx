import { Route, Routes } from 'react-router-dom';
import { Geral, Home, Instalacao } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instalando" element={<Instalacao />} />
      <Route path='/geral' element={<Geral />}/>
    </Routes>
  );
};

import { Route, Routes } from 'react-router-dom';
import {
  Usando,
  Home,
  Instalacao,
  Geral,
  Temas,
  MediaQueries,
  NotFound,
  BoxPage,
  ButtonPage,
} from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* INTRODUÇÃO */}
      <Route path="/instalando" element={<Instalacao />} />
      <Route path="/usando" element={<Usando />} />

      {/* LAYOUT */}
      <Route path="/geral" element={<Geral />} />
      <Route path="/temas" element={<Temas />} />
      <Route path="/mediaqueries" element={<MediaQueries />} />

      {/* COMPONENTES */}
      <Route path="/box" element={<BoxPage />} />
      <Route path="/button" element={<ButtonPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

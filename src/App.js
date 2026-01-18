import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ROUTES } from './constants/routes';
import HomeScreen from './screens/home/HomeScreen';
import SobreScreen from './screens/sobre/SobreScreen';
import ProjetosScreen from './screens/projetos/ProjetosScreen';
import ExperienciaScreen from './screens/experiencia/ExperienciaScreen';
import ContatoScreen from './screens/contato/ContatoScreen';

const ROUTE_CONFIG = [
  { path: ROUTES.home, element: <HomeScreen /> },
  { path: ROUTES.sobre, element: <SobreScreen /> },
  { path: ROUTES.projetos, element: <ProjetosScreen /> },
  { path: ROUTES.experiencia, element: <ExperienciaScreen /> },
  { path: ROUTES.contato, element: <ContatoScreen /> },
];

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {ROUTE_CONFIG.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

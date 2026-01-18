import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ROUTES } from './constants/routes';
import HomeScreen from './screens/home/HomeScreen';
import SobreScreen from './screens/sobre/SobreScreen';
import ProjetosScreen from './screens/projetos/ProjetosScreen';
import ExperienciaScreen from './screens/experiencia/ExperienciaScreen';
import ContatoScreen from './screens/contato/ContatoScreen';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.home} element={<HomeScreen />} />
          <Route path={ROUTES.sobre} element={<SobreScreen />} />
          <Route path={ROUTES.projetos} element={<ProjetosScreen />} />
          <Route path={ROUTES.experiencia} element={<ExperienciaScreen />} />
          <Route path={ROUTES.contato} element={<ContatoScreen />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

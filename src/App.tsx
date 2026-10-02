import { Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Story } from './pages/Story';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Events } from './pages/Events';
import { Team } from './pages/Team';
import { Lab } from './pages/Lab';
import { ComingSoon } from './pages/ComingSoon';
import { NotFound } from './pages/NotFound';
import { ROUTES } from './lib/routes';

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.story} element={<Story />} />
          <Route path={ROUTES.projects} element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path={ROUTES.events} element={<Events />} />
          <Route path={ROUTES.team} element={<Team />} />
          <Route path={ROUTES.lab} element={<Lab />} />
          <Route path={ROUTES.comingSoon} element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import PokemonDetail from './PokemonDetail';
import PokemonList from './PokemonList';
import Header from './Header';
import ErrorBoundary from '../ErrorBoundary';
import Torneo from './Torneo';

export default function AppRutes() {
  return (
    <>
      <ErrorBoundary>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
        <Route path="/pokemon-list" element={<PokemonList />} />
        <Route path="/Torneo" element={<Torneo />} />

      </Routes>
      </ErrorBoundary>
    </>
  );
}
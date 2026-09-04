import './App.css'
import PokemonCard, { pokemonList } from './components/PokemonCard';

function App() {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default App;
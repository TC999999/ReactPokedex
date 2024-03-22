import pokeList from "./PokeList";
import Pokecard from "./Pokecard.jsx";
import "./Pokedex.css";

const Pokedex = () => {
  const dexEntries = pokeList.map((mon) => {
    return (
      <Pokecard
        name={mon.name}
        img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${mon.id}.png`}
        type={mon.type}
        exp={mon.base_experience}
      />
    );
  });

  return (
    <div>
      <h2 id="PokeDexTitle">Pokedex</h2>
      <div id="pokeEntries">{dexEntries}</div>
    </div>
  );
};

export default Pokedex;

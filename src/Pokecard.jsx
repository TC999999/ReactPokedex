import "./Pokecard.css";

const Pokecard = ({ name, img, type, exp }) => {
  return (
    <div className="pokecard">
      <h4 className="pokeName">{name}</h4>
      <img className="pokeImg" src={img} />
      <div className="information">
        <div className="pokeType">Type: {type}</div>
        <div className="pokeEXP">EXP: {exp}</div>
      </div>
    </div>
  );
};

export default Pokecard;

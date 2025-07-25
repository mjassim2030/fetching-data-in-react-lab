const PlanetCard = ({ planet }) => (
  <li>
    <h3>{planet.name}</h3>
    <p><strong>Climate:</strong> {planet.climate}</p>
    <p><strong>Terrain:</strong> {planet.terrain}</p>
    <p><strong>Population:</strong> {planet.population}</p>
  </li>
);

export default PlanetCard;
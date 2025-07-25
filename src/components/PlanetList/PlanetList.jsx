import PlanetCard from "../PlanetCard/PlanetCard";

const PlanetList = ({ planets }) => (
  <section>
    <ul>
      {planets.map((planet) => (
        <PlanetCard key={planet.name} planet={planet} />
      ))}
    </ul>
  </section>
);

export default PlanetList;
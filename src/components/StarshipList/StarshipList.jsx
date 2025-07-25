import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ starships }) => (
  <section>
    <ul>
      {starships.map((ship) => (
        <StarshipCard key={ship.name} starship={ship} />
      ))}
    </ul>
  </section>
);

export default StarshipList;

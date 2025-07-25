// src/App.jsx

import { useEffect, useState } from "react";
import { fetchStarships, fetchPlanets } from "./services/starshipService";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import StarshipList from "./components/StarshipList/StarshipList";
import PlanetList from "./components/PlanetList/PlanetList";

import "./App.css";

function App() {
  const [starshipsData, setStarshipsData] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [displayedPlanets, setDisplayedPlanets] = useState([]);

  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchStarships();
      setStarshipsData(data);
      setDisplayedStarships(data);

      const planets = await fetchPlanets();
      setPlanetsData(planets);
      setDisplayedPlanets(planets)

    }

    loadData();
  }, []);

  const searchStarships = (query) => {
    const lowerQuery = query.toLowerCase();
    const filteredShips = starshipsData.filter((ship) =>
      ship.name.toLowerCase().includes(lowerQuery) ||
      ship.model.toLowerCase().includes(lowerQuery) ||
      ship.manufacturer.toLowerCase().includes(lowerQuery) ||
      ship.starship_class.toLowerCase().includes(lowerQuery)
    );

    const filteredPlanets = planetsData.filter((planet) =>
      planet.name.toLowerCase().includes(lowerQuery) ||
      planet.climate.toLowerCase().includes(lowerQuery) ||
      planet.terrain.toLowerCase().includes(lowerQuery) ||
      planet.population.toLowerCase().includes(lowerQuery)
    );

    setDisplayedStarships(filteredShips);
    setDisplayedPlanets(filteredPlanets);

    setPrevSearchTerm(query);

  };

  const resetSearch = () => {
    setDisplayedStarships(starshipsData);
    setDisplayedPlanets(planetsData);
    setPrevSearchTerm("");
  };

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch
        onSearch={searchStarships}
        onReset={resetSearch}
        showReset={prevSearchTerm.length > 0}
        resultCount={
          Array.isArray(displayedStarships) ? 
          Array.isArray(displayedPlanets) ? 
          `${displayedStarships.length} Starships and ${displayedPlanets.length} Planets`
          : 0 : 0
        }
        prevSearchTerm={prevSearchTerm}
      />
            <h2 style={{ marginTop: "2rem" }}>Starships</h2>

      {Array.isArray(displayedStarships) && displayedStarships.length > 0 ? (
        <StarshipList starships={displayedStarships} />
      ) : (
        <p>Loading...</p>
      )}
      <h2 style={{ marginTop: "2rem" }}>Planets</h2>
      {Array.isArray(displayedPlanets) && displayedPlanets.length > 0 ? (
        <PlanetList planets={displayedPlanets} />
      ) : (
        <p>Loading planets...</p>
      )}

    </main>
  );
}

export default App;
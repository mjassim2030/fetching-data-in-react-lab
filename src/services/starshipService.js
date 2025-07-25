const fetchStarships = async () => {
  try {
    const res = await fetch('https://swapi.info/api/starships');
    if (!res.ok) {
      throw new Error("Failed to fetch starships.");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const fetchPlanets = async () => {
  try {
    const res = await fetch('https://swapi.info/api/planets');
    if (!res.ok) {
      throw new Error("Failed to fetch starships.");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { fetchStarships, fetchPlanets }

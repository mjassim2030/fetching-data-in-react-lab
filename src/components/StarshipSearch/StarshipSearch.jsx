import { useState } from "react";

const StarshipSearch = ({ onSearch, onReset, showReset, resultCount, prevSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Starship/Planet details"
        />
        <button type="submit">Search</button>
        {showReset && <button type="button" onClick={onReset}>Show All</button>}
      </form>
      <p className="search-meta">{`Results: ${resultCount}`}</p>
      <p className="search-meta">
        {prevSearchTerm ? `Last search: ${prevSearchTerm}` : "Search for a Starship or Planet"}
      </p>
    </div>
  );
};

export default StarshipSearch;
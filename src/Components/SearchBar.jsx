import React, { useState, useEffect } from "react";

function SearchBar({ searchQuery, onSearch }) {
  const [query, setQuery] = useState(searchQuery);

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  function handleInputChange(e) {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // transmet la recherche au parent
  }

  function handleClear() {
    setQuery("");
    onSearch(""); // reset recherche
  }

  return (
    <div className="container mt-4">
      <div className="input-group shadow-sm">
        <input
          type="text"
          className="form-control"
          placeholder="Search articles..."
          value={query}
          onChange={handleInputChange}
        />
        {query && (
          <button className="btn btn-outline-secondary" onClick={handleClear}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export { SearchBar };

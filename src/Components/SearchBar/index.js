import { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name or Pokédex Number</label>
        <input
          type="search"
          name="search"
          placeholder="Name or Pokédex Number"
          value={searchText}
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;

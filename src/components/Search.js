const Search = ({ title, setTitle }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Recherche..."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Search;

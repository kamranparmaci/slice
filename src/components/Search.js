import "./Search.css";

const Search = ({ onChange, ...otherProps }) => {
  return (
    <form>
      <input onChange={onChange} {...otherProps} />
    </form>
  );
};

export default Search;

import { IoSearch } from "react-icons/io5";

const Search = ({ search, setSearch }) => {
  return (
    <>
      <IoSearch className="text-2xl text-primary" />
      <input
        type="search"
        name="Search"
        placeholder="Search"
        className="pl-4 text-gray-500 text-lg font-medium outline-none w-full"
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default Search;

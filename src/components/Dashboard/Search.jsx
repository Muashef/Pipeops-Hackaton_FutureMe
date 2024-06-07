import { useState } from "react";
import search from "../../assets/search.svg";

function Search() {
  const [query, setQuery] = useState("");
  return (
    <div className="bg-gray-50 rounded-md p-2 flex justify-between items-center gap-2 w-5/6 mb-8">
      <img src={search} className=""/>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-full bg-transparent outline-none"
        placeholder="Search Careers..."
      />
    </div>
  );
}
export default Search;

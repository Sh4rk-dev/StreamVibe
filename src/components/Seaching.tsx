import { useState } from "react";

type SearchProps = {
  onSearch: (query: string) => void;
};

export const Search = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      className="flex flex-1 w-full justify-between"
      onSubmit={handleSearch}
    >
      <div className="flex-1 flex flex-row gap-2 items-center justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 w-full pl-4 py-2 rounded-l-md text-Custom-Gray-60 focus:outline-none bg-Custom-Black-08"
          placeholder="Search for movies or shows"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-Custom-Red-45 hover:bg-Custom-Red-60 py-2 px-4 rounded-r-md cursor-pointer duration-300 delay-75"
      >
        Search
      </button>
    </form>
  );
};

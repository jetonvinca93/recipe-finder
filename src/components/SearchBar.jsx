import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(value.trim());
  };

  return (
    <div className="rounded-2xl p-4 mt-16 w-1/2 mx-auto bg-gray-200 opacity-80 align-center border-2 border-gray-800">
      <form onSubmit={handleSubmit} className="">
        <h1 className="text-4xl mb-4 ">Recipe Finder App</h1>
        <label className="text-3xl block">Find a recipe</label>
        <input
          className="border rounded p-1 mt-2"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="p-1 block  border rounded mt-4" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

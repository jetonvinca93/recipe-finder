import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, status }) {
  if (status === "loading") {
    return <p className="text-center text-gray-600 mt-6">Loading…</p>;
  }
  if (status === "error") {
    return (
      <p className="text-center text-red-600 mt-6">
        Error fetching recipes. Check your API key / quota.
      </p>
    );
  }
  if (!recipes?.length) {
    return null; // show nothing until there are results
  }

  return (
    <ul className="max-w-5xl  mx-auto mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </ul>
  );
}

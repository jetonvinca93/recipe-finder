export default function RecipeCard({ recipe }) {
  return (
    <li className="bg-gray-200 rounded-lg shadow p-4">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-3 font-semibold">{recipe.title}</h3>
    </li>
  );
}

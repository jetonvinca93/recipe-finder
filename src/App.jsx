import { useState } from "react";
import SearchBar from "./components/SearchBar"; // <- ensure file name matches
import RecipeList from "./components/RecipeList";
import { searchByIngredients } from "./services/spoonacular";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | error

  const handleSearch = async (q) => {
    try {
      setStatus("loading");
      const res = await searchByIngredients(q);
      setRecipes(res);
      setStatus("idle");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/RecipeBG.jpg')" }}
    >
      {/* put layout/flex/padding here, not on the bg div */}
      <div className="flex flex-col">
        <SearchBar onSubmit={handleSearch} />
        <RecipeList recipes={recipes} status={status} />
      </div>
    </div>
  );
}

export default App;

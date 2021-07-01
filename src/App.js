import './App.css';
import Axios from "axios";
import { useState } from "react";
import RecipeTiles from './components/RecipeTiles'

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan")

  const YOUR_APP_ID = "418d67d6";
  const YOUR_APP_KEY = "19945477ae4a5366191544c6124387fb";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes(){
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }


  return (
    <>
      <div className="app">
        <h1>Food Recipe Empire</h1>

        <form className="app__searchForm" onClick={onSubmit}>
          <input type="text" 
          className="app__input"
          placeholder="enter ingredients" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} />
          <input type="submit"
          className="app__submit"
          value="Search" />

          <select className="app__healthLabels">
            <option value="vegan" onClick={() => sethealthLabels("vegan")}>Vegan</option>
            <option value="Vegetarian" onClick={() => sethealthLabels("Vegetarian")}>Vegetarian</option>
            <option value="soy-free" onClick={() => sethealthLabels("soy-free")}>soy-free</option>
            <option value="tree-nut-free" onClick={() => sethealthLabels("tree-nut-free")}>tree-nut-free</option>
            <option value="peanut-free" onClick={() => sethealthLabels("peanut-free")}>peanut-free</option>
            <option value="egg-free" onClick={() => sethealthLabels("egg-free")}>egg-free</option>
            <option value="low-sugar" onClick={() => sethealthLabels("low-sugar")}>low-sugar</option>
            <option value="dairy-free" onClick={() => sethealthLabels("dairy-free")}>dairy-free</option>
            <option value="glutten-free" onClick={() => sethealthLabels("glutten-free")}>glutten-free</option>
            <option value="wheat-free" onClick={() => sethealthLabels("wheat-free")}>wheat-free</option>
            <option value="paleo" onClick={() => sethealthLabels("paleo")}>paleo</option>
          </select>
        </form>

        <div className="app__recipes">
          {recipes.map(recipe => {
            return <RecipeTiles recipe={recipe}/>
          })}
        </div>
      </div>
      <div className="FooterText">
        <p><a href="https://fatadedotun.netlify.app/">Adedotun Fatokun.</a> All rights reserved &copy; 2021.</p>
      </div>
    </>
  );
}

export default App;

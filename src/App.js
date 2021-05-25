import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import KPCookingRecipes from "./components/pages/KPCookingRecipes";

import Articles from "./components/pages/Articles";
import Navbar from "./components/header/Navbar";
import Footer from "./components/Footer";
import Recipes from "./components/pages/Recipes";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/kpCookingRecipes/:cardId"
          component={KPCookingRecipes}
        />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/:valueId" component={Recipes} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

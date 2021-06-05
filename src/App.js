import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home.component";
import KPCookingRecipes from "./components/pages/KPCookingRecipes.component";

import Articles from "./components/pages/Articles.component";
import Navbar from "./components/header/Navbar.component";
import Footer from "./components/footer/Footer.component";
import Recipes from "./components/pages/Recipes.component";

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

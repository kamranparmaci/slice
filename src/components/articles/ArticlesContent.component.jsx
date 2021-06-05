import CardArticle from "./CardArticle.component";

const ArticlesContent = () => {
  return (
    <div className="pb-5">
      <div className="row">
        <div className="col-md-4">
          <CardArticle
            image="../../img/aboutKPCookingRecipes.jpg"
            title="About kpcookingRecipe"
          />
        </div>
        <div className="col-md-4">
          <CardArticle
            image="../../img/fish-recipes-healthy.jpg"
            title="Featured Recipes"
          />
        </div>
        <div className="col-md-4">
          <CardArticle
            image="../../img/search-for-food-infographic-spoonacular-small.png"
            title="Foodie Comics"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <CardArticle
            image="../../img/best-store-bought-alfredo-sauce.png"
            title="Foodie Gifts"
          />
        </div>
        <div className="col-md-4">
          <CardArticle
            image="../../img/paleo-meal-plan.jpg"
            title="Free Meal Plans"
          />
        </div>
        <div className="col-md-4">
          <CardArticle
            image="../../img/best-store-bought-alfredo-sauce.png"
            title="
            Grocery Picks"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <CardArticle
            image="../../img/how-to-improve-your-food-blog-in-30-seconds-with-the-spoonacular-recipe-toolkit.png"
            title="Guides"
          />
        </div>
        <div className="col-md-4">
          <CardArticle
            image="../../img/cheap-protein-sources-for-all-diets.png"
            title="Healthy Eating Tips"
          />
        </div>
        <div className="col-md-4">
          <CardArticle
            image="../../img/become-a-better-chef-with-the-spoonacular-academy.png"
            title="Academy"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlesContent;

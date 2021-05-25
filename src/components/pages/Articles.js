import ArticlesContent from "../articles/ArticlesContent";

const Articles = () => {
  return (
    <div className="pt-5">
      <div className="container">
        <h2>Food Articles</h2>
        <p>
          Knowledge is power. Delicious power. Here you can find all the
          articles the kpcookingRecipe team has written, from free meal plans to
          foodie comics to our favorite grocery picks.
        </p>
        <ArticlesContent />
      </div>
    </div>
  );
};

export default Articles;

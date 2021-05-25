import "./CardArticle.css";

const CardArticle = ({ image, title }) => {
  return (
    <summary className="card text-dark mt-4">
      <img className="card-img-top image-article" src={image} alt="Article" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </summary>
  );
};

export default CardArticle;

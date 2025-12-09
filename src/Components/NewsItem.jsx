export const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{
        maxWidth: "345px",
        width: "345px",
        height: "400px", // hauteur totale de la carte
        display: "inline-block",
        verticalAlign: "top",
      }}
    >
      <img
        src={src ? src : "/images.jpeg"}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover", // garde les proportions de l'image
        }}
        className="card-img-top"
        alt="news"
      />
      <div
        className="card-body"
        style={{
          height: "180px", // hauteur fixe de la zone texte
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // espace entre titre, description et bouton
          overflow: "hidden", // coupe le texte si trop long
        }}
      >
        <div>
          <h5 className="card-title">{title ? title.slice(0, 50) : ""}</h5>
          <p className="card-text">
            {description ? description.slice(0, 90) : ""}
          </p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-auto"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

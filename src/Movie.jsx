import React from "react";

const style = {
  border: "1px solid white",
};

const Movie = ({ name, image, genre, rating, Trend, director, alt }) => {
  return (
    <div>
      <img src={image} alt={alt} />
      <h3>{name}</h3>
      <p>{genre}</p>
      <h5>{rating}</h5>
      <p>Director: {director}</p>
      <p>{Trend}</p>
    </div>
  );
};

export default Movie;

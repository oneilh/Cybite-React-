import React from "react";

const style = {
  border: "1px solid white",
};

const Movie = (props) => {
  // console.log(props);
  const { name, image, genre, rating, director, alt } = props;

  function show(name) {
    console.log("Name of movie: ", name);
  }
  return (
    <div>
      <img src={image} alt={alt} />
      <h3>{name}</h3>
      <p>{genre}</p>
      <h5>{rating}</h5>
      <p>Director: {director}</p>
      <button
        onClick={()=>{show(name)}}
      >
        Show Name
      </button>
    </div>
  );
};

export default Movie;

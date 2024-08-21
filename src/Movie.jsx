import React from 'react'
const director = "Abigail";
const style = {
  border: "1px solid white",
};
const Movie = () => {
  return (
    <div>
    <img
      src="https://resizing.flixster.com/OBCMbeYEWS5tI2QhErFskxKyEa0=/206x305/v2/https://resizing.flixster.com/mPJp85eApHd8ih9XF5E9d3-2LbM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUxODlkZDE1LTQyYjUtNDg5ZS05NjZmLWMxZDk1YWZhN2E1ZC5qcGc="
      alt="deadpool and wolverine movie image"
    />
    <h3>Deadpool and Wolverine</h3>
    <p>Action, Fantasy</p>
    <h5>7.8</h5>
    <p>Director: {director}</p>
  </div>
  )
}

export default Movie

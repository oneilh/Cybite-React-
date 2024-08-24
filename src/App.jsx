import "./app.css";
import Heading from "./Heading";
import Movie from "./Movie";
import movies from "./movie db";

const style = {
  border: "1px solid white",
};



const App = () => {
  return (
    <main>
      <Heading />
      <section className="movies">
        <Movie Trend="Hot" {...movies[0]} />
        <Movie {...movies[1]} />
        <Movie {...movies[2]} />
        <Movie {...movies[3]} />
      </section>
    </main>
  );
};

export default App;

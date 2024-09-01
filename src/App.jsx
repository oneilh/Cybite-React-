// import Navbar from "./ContactApp/Navbar";

import "./app.css";
import Heading from "./Heading";
import Movie from "./Movie";
import moviesDB from "./movie db";


const style = {
  border: "1px solid white",
};

const App = () => {
  const btn =   <button>click</button>;
  return (
    <main>
      <Heading />
      <section className="movies">
        {/* <Movie Trend="Hot" {...movies[0]} />
        <Movie Trend = 'Popular'{...movies[1]} />
        <Movie {...movies[2]} >
          <button>click</button>
        </Movie>
        <Movie {...movies[3]} btn={btn}/> */}
      {moviesDB.map((movie)=>{
        const {name} = movie
        return <Movie {...movie} key={name} />
      })}

      </section>
    </main>
  );
};



// const App = () => {
//   return (
//     <main>
//       <Navbar/>
//     </main>
//   )
// }



export default App; 

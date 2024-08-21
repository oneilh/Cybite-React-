import "./app.css";
import Heading from "./Heading";
import Movie from "./Movie";

const director = "Abigail";
const style = {
  border: "1px solid white",
};

const App = () => {
  return (
    <main>
      <Heading/>
      <section className="movies">
       <Movie/>
       <Movie/>
       <Movie/>
       <Movie/>
       
      </section>
    </main>
  );
};

{/* <div>
<img
  src="https://resizing.flixster.com/h_VUrsfh-P-2_kRDCNA_sFntBWk=/206x305/v2/https://resizing.flixster.com/hYB41f7m0pUhlpCmBVCbsq9LOCo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc0OGY3MDJiLTUzMTMtNDNiNC05MjgyLTM3ZWRmMzYzNTI0Ny5qcGc="
  alt="The Union movie image"
/>
<h3>THE UNION</h3>
<p>Action, Horror</p>
<h5>4.1</h5>
</div>
<div style={style}>
<img
  src="https://resizing.flixster.com/g0rxvArZsZFsV8-gKSFPeNrmB-s=/206x305/v2/https://resizing.flixster.com/JMUezA59v3r50XvD34SELkqBnL0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZjYmVjMTllLTViOWYtNDY4NC04YWY5LTdmMGIxMTM1MWEwMS5qcGc="
  alt="Trap movie image"
/>
<h3>TRAP</h3>
<p>Comedy, Horror</p>
<h5>5.5</h5>
</div>
<div>
<img
  src="https://resizing.flixster.com/_yC8AF-46nLToYSY6v606xkp7dE=/206x305/v2/https://resizing.flixster.com/cJ-ZXvAojFDjeYi1VwAIOX2CNSE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2EwMDgwMjUwLTQwMGYtNGViMi05MTEyLTAzMDYxMTkxZTI4ZS5qcGc="
  alt="Jackpot! movie image"
/>
<h3>JACKPOT!</h3>
<p>Comedy, Business</p>
<h5>3.2</h5>
</div> */}
export default App;

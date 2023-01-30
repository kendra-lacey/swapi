import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
    <header className="App-header">
      <img
        src='/logo512.png'
        style={{ width: "50px", height: "50px" }}
        className="App-logo"
        alt="logo"
      /> 
      <h1 className="h1">
      STARSHIPS 🌌 
      </h1>
    </header>
   );
}
 
export default NavBar;
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

///Service:

import {getShipDetails} from "../../services/sw-api";



const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
        const starshipData = await getShipDetails(location.state.starship.url)
        setStarshipPage(starshipData)
    }
    fetchDetails()
  },[location.state.starship.url])

  return ( 
    <div className="details-card">

    <div className="card">
      <h3 >starship DEETZ</h3>
      <h3>NAME:{starshipPage.name}</h3>
      <h3>MODEL:{starshipPage.model}</h3>
      <h3>HYPERDRIVE RATING:{starshipPage.hyperdrive_rating}</h3>
      <Link to='/'>GO BACK TO FLEET</Link>
    </div>
    </div>
);
}

export default StarshipPage;
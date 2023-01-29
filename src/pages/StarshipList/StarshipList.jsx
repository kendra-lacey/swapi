import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


//Service:

import { getAllStarships } from "../../services/sw-api";



const StarshipList = () => {
  const [starshiplist, setStarshipList]  = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starShipdata = await getAllStarships()
      setStarshipList(starShipdata.results)
    }
    fetchStarshipList()
  }, [])

  return ( 
    <div className="card-container">
    {starshiplist.length ?
      <>
      {starshiplist.map(starship =>
        <div key={(starship.index)}>
          <Link to='/' state={{starship}}>
              <button className="Card">{starship.name}</button>
          </Link> 
        </div>
        )}
      </>
      :
      <>
        <div>Starships Incoming.....</div>
      </>
    }
    </div>
  );
}

export default StarshipList;
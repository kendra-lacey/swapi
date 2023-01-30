import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


//Service:

import { getAllStarships } from "../../services/sw-api";

// const handleClick= evt => {
//   evt.preventDefault()
//   props.handleSpellSearch(formData)
// }

const StarshipList = () => {
  const [starshiplist, setStarshipList]  = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starShipdata = await getAllStarships()
      setStarshipList(starShipdata.results)
    }
    fetchStarshipList()
  }, [])

const handleClick =  () => {
  
}


  return ( 
    <div className="card-container">
    {starshiplist.length ?
      <>
      {starshiplist.map(starship =>
        <div key={(starship.url)} onClick={handleClick}>
          <Link style={{ textDecoration:'none' }}  to='/starship' state={{starship}} key={starship.name}>
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
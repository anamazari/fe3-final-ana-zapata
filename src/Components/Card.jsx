/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";


const Card = ({data: { name, username, id }, removeFromFavs}) => {

  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favs")) ?.some((card) => card.id === id) || false)

  const addFav = ()=>{

    const favs = JSON.parse(localStorage.getItem("favs")) || []

    if(!favs.some((card) => card.id == id)){
      favs.push({ name, username, id })

    localStorage.setItem("favs", JSON.stringify(favs))
    setFavorite(true)
    }else{
      const newFav = favs.filter((card) => card.id !== id)
      localStorage.setItem("favs", JSON.stringify(newFav))
      setFavorite(false)
      removeFromFavs(id);
    }
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src="public\images\doctor.jpg" alt="Image" />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton">{favorite ? "❤️" : "🤍"}</button>
    </div>

  );
};

export default Card;


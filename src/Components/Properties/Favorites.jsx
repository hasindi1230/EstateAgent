import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Favorites.css'

function Favorites() {
    const[favorites, setFavorites] = useState([]);

    useEffect( () => {
        const updateFavorites = () => {
            const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
            setFavorites(savedFavorites);
        };

        updateFavorites();

        window.addEventListener("storage" , updateFavorites);

        return ()=> {
            window.removeEventListener("storage" , updateFavorites);
        }
    }, []);

    // Clearing the list of favories
    const clearFavories = () => {
        localStorage.removeItem("favorites");
        setFavorites([]);
    };

  return (
    <div className='favorites'>
        <h3>Favorites List</h3>
    
        {favorites.length === 0 ? (
            <p>Nothing added to favorites</p>
        ) : (
            <ul>
                {favorites.map ( (id, index) => (
                    <li key={index}>
                        <Link to={`/Properties/prop${id}`}>Property {id}</Link>
                    </li>
                ))}
            </ul>
        )}
        <br />

        <button onClick={clearFavories}>Clear all</button>
                
    </div>
  )
}

export default Favorites
import React, { useEffect, useState } from 'react'
import './prop7.css'
import Favorites from './Favorites';

function prop7() {
    const [isFavorite, setIsFavorite] = useState(false)
        const residentId = '7'
    
        useEffect( () => {
            const favorites = JSON.parse(localStorage.getItem("favorites"))|| [];
            setIsFavorite(favorites.includes(residentId));
        }, [residentId]);
    
        const handleClick = () => {
            const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            if(favorites.includes(residentId))  {
                // removing the added item from favorites
                const updateFavorite = favorites.filter ( (id) => id !== residentId);
                localStorage.setItem("favorites" , JSON.stringify(updateFavorite));
                setIsFavorite(false);
            }  else {
                // Adding to favorites
                favorites.push(residentId);
                localStorage.setItem("favorites" , JSON.stringify(favorites));
                setIsFavorite(true);
            }
        }

  return (
    <div>
        <div className='list'>
            <Favorites />
            <h2>A Modern Flat located in Glasgow</h2>
        </div>

        <button className={`favorite-btn $ {isFavorite ? "favorites" : " "}`}
                onClick={handleClick}>{isFavorite ? "𖹭 Remove from Favorites" : " ♥ Add to Favorites" } 
        </button>

        <div className='container'>
            <div className='large'>
            <img src="/prop7small.jpg" alt="" className='large'/>
            </div>


            <div className='images'>
                <img src="/prop7sub1.jpg" alt="" className='prop1' />
                <img src="/prop7sub2.jpg" alt="" className='prop1'/> 
                <img src="/prop7sub3.jpeg" alt="" className='prop1' />
                <img src="/prop7sub4.webp" alt="" className='prop1'/>
                <img src="/prop7sub5.webp" alt="" className='prop1' />
                <img src="/prop7sub6.webp" alt="" className='prop1' />
            </div>
            <br /><br />
        </div>

        <div style={{display:'flex',  gap:'300px', margin:"20px"}}>
            <p>21 1/2, Earl Street, Glasgow, Gla G14 0BA</p>
            <p>Added : 2023-March-11</p>
        </div>
        
        <h2>1600€ PCM </h2>
        <div style={{display:'flex',  gap:'300px'}}>
            <h4 style={{margin:'20px'}}>BEDROOMS 🛌 2</h4>
            <h4 style={{margin:'20px'}}>BATHROOMS 🛁 1</h4>
        </div>
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Description</h4>
        
        <ul>
            <li>
            pleased to offer to the market this newly refurbished first floor flat within the New Glasgow area.
            </li>
            <li>Offered to the market furnished, this spacious property is offered in walk in condition and is just a short walk from all city centre amenities <br /> including public transport and shopping facilities.</li>
            <li>Located on the banks of the River Clyde the apartments enjoy unrivaled views across the city, while amenities include a residents' only 24-hour gym, <br /> a games room, a private dining room with city views from the ninteenth floor, and co-working spaces.
            </li>
            
        </ul>
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Location : 21 1/2, Earl Street, Glasgow, Gla G14 0BA</h4> <br />
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Floor Plan</h4>
        <img src="/prop7floor.webp" alt="" className='floor' />
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Google Map</h4>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=21 1/2, Earl Street, Glasgow, Gla G14 0BA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>
    </div>
  )
}

export default prop7
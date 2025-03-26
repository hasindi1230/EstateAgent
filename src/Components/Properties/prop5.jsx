import React, { useEffect, useState } from 'react'
import './prop5.css'
import Favorites from './Favorites';

function prop5() {
    const [isFavorite, setIsFavorite] = useState(false)
        const residentId = '5'
    
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
            <h2>A Modern House located in York</h2>
        </div>
        

        <button className={`favorite-btn $ {isFavorite ? "favorites" : " "}`}
                onClick={handleClick}>{isFavorite ? "𖹭 Remove from Favorites" : " ♥ Add to Favorites" } 
        </button>

        <div className='container'>
            <div className='large'>
            <img src="/prop5small.webp" alt="" className='large'/>
            </div>


            <div className='images'>
                <img src="/prop5sub1.webp" alt="" className='prop1' />
                <img src="/prop5sub2.jpg" alt="" className='prop1'/> 
                <img src="/prop5sub3.jpg" alt="" className='prop1' />
                <img src="/prop5sub4.jpg" alt="" className='prop1'/>
                <img src="/prop5sub5.webp" alt="" className='prop1' />
                <img src="/prop5sub6.webp" alt="" className='prop1' />
            </div>
            <br /><br />
        </div>

        <div style={{display:'flex',  gap:'300px', margin:"20px"}}>
            <p>67, Kensington Street, York YO23 1JA</p>
            <p>Added : 2022-September-05</p>
        </div>
        
        <h2>1500€ PCM </h2>
        <div style={{display:'flex',  gap:'300px'}}>
            <h4 style={{margin:'20px'}}>BEDROOMS 🛌 4</h4>
            <h4 style={{margin:'20px'}}>BATHROOMS 🛁 2</h4>
        </div>
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Description</h4>
        
        <ul>
            <li>
            A fabulous 4 bedroom townhouse offering versatile accommodation finished to a superb standard situated within walking distance to York City Centre.
            </li>
            <li>The property offers exceptional reception and entertaining space, well designed as well as benefitting from bespoke finishes, designer kitchen and modern decor throughout.</li>
            <li>The property also benefits from having a utility room and cloakroom. To the first floor there are four bedrooms and a 
            family bathroom with separate WC.</li>
            <li>Additional features include double glazing, gas central heating and a well presented interior</li>
        </ul>
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Location : 67, Kensington Street, York YO23 1JA </h4> <br />
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Floor Plan</h4>
        <img src="/prop5floor.webp" alt="" className='floor' />
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Google Map</h4>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=67, Kensington Street, York YO23 1JA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>

    </div>
  )
}

export default prop5
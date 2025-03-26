import React, { useEffect, useState } from 'react'
import './prop4.css'
import Favorites from './Favorites';

function prop4() {
    const [isFavorite, setIsFavorite] = useState(false)
        const residentId = '4'
    
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
        <div>
            <Favorites />
            <h2>A Modern House located in Greater London </h2>
        </div>
        

        <button className={`favorite-btn $ {isFavorite ? "favorites" : " "}`}
                onClick={handleClick}>{isFavorite ? "𖹭 Remove from Favorites" : " ♥ Add to Favorites" } 
        </button>

        <div className='container'>
            <div className='large'>
            <img src="/prop4small.jpeg" alt="" className='large'/>
            </div>


            <div className='images'>
                <img src="/prop4sub1.jpg" alt="" className='prop1' />
                <img src="/prop4sub2.jpg" alt="" className='prop1'/> 
                <img src="/prop4sub3.jpg" alt="" className='prop1' />
                <img src="/prop4sub4.jpg" alt="" className='prop1'/>
                <img src="/prop4sub5.jpg" alt="" className='prop1' />
            </div>
            <br /><br />
        </div>

        <div style={{display:'flex',  gap:'300px', margin:"20px"}}>
            <p>105, Beresford Road, London, Greater London E4 6EF</p>
            <p>Added : 2023-March-20</p>
        </div>
        
        <h2>2000€ PCM </h2>
        <div style={{display:'flex',  gap:'300px'}}>
            <h4 style={{margin:'20px'}}>BEDROOMS 🛌 1</h4>
            <h4 style={{margin:'20px'}}>BATHROOMS 🛁 1</h4>
        </div>
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Description</h4>
        
        <ul>
            <li>
            Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with 
            fast trains to London and within easy walking distance of local shops, schools, bus routes and National 
            Trust woodland.
            </li>
            <li>The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory.</li>
            <li>The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a 
            family bathroom with separate WC.</li>
            <li>Additional features include double glazing, gas central heating and a well presented interior</li>
        </ul>
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Location : 105, Beresford Road, London, Greater London E4 6EF </h4> <br />
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Floor Plan</h4>
        <img src="/prop4floor.jpg" alt="" className='floor' />
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Google Map</h4>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=105, Beresford Road, London, Greater London E4 6EF&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
                </div>
            </div>
    </div>
  )
}

export default prop4
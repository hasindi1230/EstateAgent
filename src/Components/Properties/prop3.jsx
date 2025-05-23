import React, { useEffect, useState } from 'react'
import './prop3.css'
import Favorites from './Favorites';

function prop3() {
    const [isFavorite, setIsFavorite] = useState(false)
    const residentId = '3'
    
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
            <h2>A Modern House located in Greater London</h2>
        </div>
        
        <button className={`favorite-btn $ {isFavorite ? "favorites" : " "}`}
                onClick={handleClick}>{isFavorite ? "𖹭 Remove from Favorites" : " ♥ Add to Favorites" } 
        </button>

        <div className='container'>
            <div className='large'>
            <img src="/prop3small.webp" alt="" className='large'/>
            </div>


            <div className='images'>
                <img src="/prop3sub1.webp" alt="" className='prop1' />
                <img src="/prop3sub2.jpg" alt="" className='prop1'/> 
                <img src="/prop3sub3.jpg" alt="" className='prop1' />
                <img src="/prop3sub4.jpg" alt="" className='prop1'/>
                <img src="/prop3sub5.jpg" alt="" className='prop1' />
                <img src="/prop3sub6.webp" alt="" className='prop1'/>
            </div>
            <br /><br />
        </div>

        <div style={{display:'flex',  gap:'300px', margin:"20px"}}>
            <p>8, Heathcote Grove, London, Greater London E4 6RT</p>
            <p>Added : 2023-January-12</p>
        </div>
        
        <h2>1900€ PCM </h2>
        <div style={{display:'flex',  gap:'300px'}}>
            <h4 style={{margin:'20px'}}>BEDROOMS 🛌 5</h4>
            <h4 style={{margin:'20px'}}>BATHROOMS 🛁 3</h4>
        </div>
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Description</h4>
        
        <ul>
            <li>
            This impressive five bedroom detcahed house has over 1600 sqft of living accommodation, with five bedrooms, 
            two reception rooms, a Kitchen-diner, study room, three bathrooms.
            </li>
            <li>This alos has off street parking for multiple cars the property is an ideal family home.</li>
        </ul>
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Location : 8, Heathcote Grove, London, Greater London E4 6RT </h4> <br />
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Floor Plan</h4>
        <img src="/prop3floor.webp" alt="" className='floor' />
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Google Map</h4>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=8, Heathcote Grove, London, Greater London E4 6RT&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
               </div>
            </div>
    </div>
  )
}

export default prop3
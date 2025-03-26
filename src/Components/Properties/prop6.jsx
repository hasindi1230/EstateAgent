import React, { useEffect, useState } from 'react'
import './prop6.css'
import Favorites from './Favorites';

function prop6() {
    const [isFavorite, setIsFavorite] = useState(false)
    const residentId = '6'
    
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
            <h2>A Modern Flat located in York</h2>
        </div>

        <button className={`favorite-btn $ {isFavorite ? "favorites" : " "}`}
                onClick={handleClick}>{isFavorite ? "𖹭 Remove from Favorites" : " ♥ Add to Favorites" } 
        </button>
        
        <div className='container'>
            <div className='large'>
            <img src="/prop6small.jpg" alt="" className='large'/>
            </div>


            <div className='images'>
                <img src="/prop6sub1.jpeg" alt="" className='prop1' />
                <img src="/prop6sub2.jpg" alt="" className='prop1'/> 
                <img src="/prop6sub3.jpg" alt="" className='prop1' />
                <img src="/prop6sub4.jpg" alt="" className='prop1'/>
                <img src="/prop6sub5.jpg" alt="" className='prop1' />
                <img src="/prop6sub6.jpg" alt="" className='prop1' />
            </div>
            <br /><br />
        </div>

        <div style={{display:'flex',  gap:'300px', margin:"20px"}}>
            <p>88, Garfield Terrace, York YO26 4XU</p>
            <p>Added : 2022-December-11</p>
        </div>
        
        <h2>800€ PCM </h2>
        <div style={{display:'flex',  gap:'300px'}}>
            <h4 style={{margin:'20px'}}>BEDROOMS 🛌 1</h4>
            <h4 style={{margin:'20px'}}>BATHROOMS 🛁 2</h4>
        </div>
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Description</h4>
        
        <ul>
            <li>
            York are delighted to present this 1 bedroom first floor apartment in an ideal location less than a fifteen minute walk to York city centre, the train station and with an allocated parking space.
            </li>
            <li>You’re just minutes from top restaurants, shops, and cultural landmarks, making getting around for work or leisure easy.</li>
            <li>Newly refurbished, this apartment boasts a range of modern conveniences, including WiFi-controlled radiators, electric blinds, and internet. </li>
            <li> The spacious bedroom features a king-sized bed for ultimate comfort, while a washer-dryer adds practicality for longer stays. </li>
            <li>ALL BILLS INCLUDED FOR AN ADDITIONAL £350 PER MONTH - INCLUDING WEEKLY CLEANS AND FRESH LINEN </li>
        </ul>
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Location : 88, Garfield Terrace, York YO26 4XU </h4> <br />
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Floor Plan</h4>
        <img src="/prop6floor.jpg" alt="" className='floor' />
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Google Map</h4>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=88, Garfield Terrace, York YO26 4XU&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>
    </div>
  )
}

export default prop6
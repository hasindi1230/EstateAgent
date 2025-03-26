import React, { useEffect, useState } from 'react'
import './prop2.css'
import Favorites from './Favorites';

function prop2() {

    const [isFavorite, setIsFavorite] = useState(false)
    const residentId = '2'

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
            <h2>A Modern Flat located in Orpington BR6</h2>
        </div>
        
        <button className={`favorite-btn $ {isFavorite ? "favorites" : " "}`}
                onClick={handleClick}>{isFavorite ? "𖹭 Remove from Favorites" : " ♥ Add to Favorites" } 
        </button>

        <div className='container'>
            <div className='large'>
            <img src="/prop2small.webp" alt="" className='large'/>
            </div>


            <div className='images'>
                <img src="/prop2sub1.jpg" alt="" className='prop1' />
                <img src="/prop2sub2.jpg" alt="" className='prop1'/> 
                <img src="/prop2sub3.jpg" alt="" className='prop1' />
                <img src="/prop2sub6.jpg" alt="" className='prop1'/>
                <img src="/prop2sub5.jpg" alt="" className='prop1' />
                <img src="/prop2sub4.jpg" alt="" className='prop1' />
            </div>
            <br /><br />
        </div>

        <div style={{display:'flex',  gap:'300px', margin:"20px"}}>
            <p>Crofton Road Orpington BR6</p>
            <p>Added : 2022-September-14</p>
        </div>
        
        <h2>2000€ PCM </h2>
        <div style={{display:'flex',  gap:'300px'}}>
            <h4 style={{margin:'20px'}}>BEDROOMS 🛌 2</h4>
            <h4 style={{margin:'20px'}}>BATHROOMS 🛁 2</h4>
        </div>
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Description</h4>
        
        <ul>
            <li>Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat.</li>
            <li>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. </li>
            <li>This large open plan benefits from bi folding doors onto a secluded private courtyard garden. </li>
            <li>Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room.</li>
            <li>There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.</li>
            <li>This apartment being only five years old, is still under a 10 year building guarantee</li>
        </ul>

        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Location : Crofton Road Orpington BR6 </h4> <br />
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Floor Plan</h4>
        <img src="/prop2floor.png" alt="" className='floor' />
        <h4 style={{display:'flex',  gap:'300px', margin:"20px"}}>Google Map</h4>
        <div class="mapouter"><div class="gmap_canvas">
            <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Crofton Road Orpington BR6&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        </div>
    </div>
    
        
  )
}

export default prop2
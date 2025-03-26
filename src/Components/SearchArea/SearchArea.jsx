import React, { useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import './SearchArea.css'


function SearchArea() {

  const location = useLocation();
  const searchedArea = location.state?.location;

  const [formInput , setFormInput] = useState( {
    propertyType : '',
    minimumPrice : '',
    maximumPrice : '',
    minBedrooms : '',
    maxBedrooms : '',
    dateAdded : '' ,
    postcode : '', 
  }
  );

  const navigate = useNavigate();

  // when the user input a value in the form updating the state

  const handleChange = (e) => {
    const {name , value} = e.target;
    
    setFormInput ( (prev) =>{
      const updated = {
        ...prev,
      [name] : value,
      }
      console.log("Updated form", updated)
      return updated
      
    }
  )
  }

  const handleSearchProperties = (e) =>{
    e.preventDefault();
    console.log("Form data has been passed" , formInput)
    navigate('/SearchResults' , {state : {filterOptions : formInput}});
  }



  return (
    <div className='formContainer'>
      <form className="form" >
        <h2>Properties to rent in <span className='areaColor'> {searchedArea}</span> </h2> <br />

        {/* Filtering form */}
        
        <fieldset>
          <label htmlFor="type"> Property Type <br /> <br />
            <select name="propertyType" id="propertyType" value={formInput.propertyType} onChange={handleChange} >
              <option value="any">Any</option>
              <option value="Flat">Flat</option>
              <option value="House">House</option>
            </select>
          </label> <br /> <br />

          <label htmlFor="price">Price Range (€) <br /><br />
            <select name="minimumPrice" id="" value={formInput.minimumPrice} onChange={handleChange} >
              <option value="">No min</option>
              <option value="700">700€ PCM </option>
              <option value="800">800€ PCM</option>
              <option value="900">900€ PCM</option>
              <option value="1000">1000€ PCM</option>
              <option value="1100">1100€ PCM</option>
              <option value="1200">1200€ PCM</option>
              <option value="1300">1300€ PCM</option>
              <option value="1400">1400€ PCM</option> 
              <option value="1500">1500€ PCM</option> 
              <option value="1600">1600€ PCM</option> 
              <option value="1700">1700€ PCM</option> 
              <option value="1800">1800€ PCM</option> 
              <option value="1900">1900€ PCM</option> 
              <option value="2000">2000€ PCM</option> 
            </select> 
            <span> - </span>
      
            <select name="maximumPrice" id="maximumPrice" value={formInput.maximumPrice} onChange={handleChange} >
              <option value="">No Max</option>
              <option value="700">700€ PCM</option>
              <option value="800">800€ PCM</option>
              <option value="900">900€ PCM</option>
              <option value="1000">1000€ PCM</option>
              <option value="1100">1100€ PCM</option>
              <option value="1200">1200€ PCM</option>
              <option value="1300">1300€ PCM</option>
              <option value="1400">1400€ PCM</option>
              <option value="1500">1500€ PCM</option>
              <option value="1600">1600€ PCM</option> 
              <option value="1700">1700€ PCM</option> 
              <option value="1800">1800€ PCM</option> 
              <option value="1900">1900€ PCM</option> 
              <option value="2000">2000€ PCM</option>
            </select> 

          </label> <br /><br />

          <label htmlFor=""> No of bedrooms <br /><br />
            <select name="minBedrooms" id="minBedrooms" value={formInput.minBedrooms} onChange={handleChange}  >
              <option value="">No min</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <span> - </span>
            <select name="maxBedrooms" id="maxBedrooms" value={formInput.maxBedrooms} onChange={handleChange} >
              <option value="">No max</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

          </label> <br /><br />

          <label htmlFor=""> Date Added <br /><br />
            <select name="dateAdded" id="dateAdded" value={formInput.dateAdded} onChange={handleChange} >
              <option value="">Anytime</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          
          </label> <br /><br />

          <label htmlFor="">Postcode <br /> <br />
            <input type="text" name='postcode' placeholder='For Ex: BR5, BR6' value={formInput.postcode} onChange={handleChange} />
          </label>

        </fieldset> <br /><br />
        <button className='propertyButton' onClick={handleSearchProperties} >Search Properties</button>

      </form>
      
    </div>
  )
}

export default SearchArea
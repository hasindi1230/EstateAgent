import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SearchResults.css'

function SearchResults() {

    const location = useLocation();
    const filterOptions = location.state?.filterOptions || {};

    const [residences , setResidences] = useState([]);
    const [propertiesFiltered , setPropertiesFiltered] = useState([]);

    useEffect( () => {
      fetch ('/properties.json')
      .then(response => response.json())
      .then((info) => {
     
        const extractedProperties = info.properties || [];
        setResidences(extractedProperties);
        filteringProperties(extractedProperties, filterOptions)
      })
      .catch((error) => console.log('Error loading the properties' , error));

    }, []);

    // purpose of using a hook in here is :
    // want to run the function filteringproperties whenever the residences of filteroptions change
    useEffect ( () => {
      if(residences.length && Object.keys(filterOptions).length){
        filteringProperties(residences, filterOptions);
      }
    
    }, [filterOptions, residences]

    );

    const filteringProperties = (residences, filters) =>{
      if(!residences.length){
        console.log("No residences found to filter");
        return;
      }
       

      // here residence means each propert in the residences array
      const filtered = residences.filter( (residence) => {
        const matchType = filters.propertyType && filters.propertyType.trim() !== '' ? residence.type.toLowerCase() === filters.propertyType.toLowerCase().trim() : true;

        const matchPrice = (!filters.minimumPrice || residence.price >= filters.minimumPrice) &&
                            (!filters.maximumPrice || residence.price <= filters.maximumPrice);
 

        const bedrooms = (!filters.minBedrooms || residence.bedrooms >= filters.minBedrooms) &&
                          (!filters.maxBedrooms || residence.bedrooms <= filters.maxBedrooms);
                        

        const matchdateAdded = (!filters.dateAdded || residence.added.split("-")[0] === filters.dateAdded);
      
        const postcode = filters.postcode ? residence.location.includes(filters.postcode) : true;
      
        return matchType && matchPrice && bedrooms && matchdateAdded && postcode;

      });
      console.log("Properties filtered", filters)

      setPropertiesFiltered(filtered);
    };


    return (
      <div>
        <h2>Search Results</h2> <br />

        {/* Displaying the list of properties based on the filtered criteria */}

        <div className='residencesList'>
          {propertiesFiltered.length > 0 ? (
            propertiesFiltered.map ( (residence) => (
              <div key={residence.id} className='residenceProperties'>
                <div className='content'>
                <img src={residence.picture} alt="" />
                
                <div className='details'>
                  <h2>Type of the property : {residence.type} </h2> 
                  <h2>Price PCM : {residence.price} € </h2>
                  <h2>No of bedrooms : {residence.bedrooms} </h2> 
                  <h2>Location : {residence.location} </h2> 
                  <h2>Date Added: {residence.added} </h2> <br />
                  <a href={`/properties/${residence.url}`}>More Details</a>
                </div>
                
                </div>
              </div>
            ))
        
          ) : (
            <p>No properties found related to your search</p>
          )
          }
        </div>
      </div>

    );


}

export default SearchResults
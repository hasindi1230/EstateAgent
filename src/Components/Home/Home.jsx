import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import { SearchIcon } from 'lucide-react';

function Home() {
  const[areaInput, setAreaInput] = useState("");
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);

  useEffect( () => {
    fetch ('/properties.json')
    .then(response => response.json())
    .then (info => setProperties(info.properties))
    .catch (error => console.log("Error in fetching the properties" , error))
  }, [] );
  // empty dependency -  [] ensures the properties.json is fetched only once when the component is loaded

  const searchHandle = () => {

    if(!areaInput.trim()){
      alert("Please enter an area to proceed!");
      return;
    }

    const areaAvailable = properties.some(property =>
      property.location.toLowerCase().includes(areaInput.trim().toLowerCase())
    );


    if(areaAvailable){
      navigate('/SearchArea' , {state: {location: areaInput.trim()}});
    }else{
      alert("Cannot find properties in the entered area.")
    }
  }



  return (
    <div className='container text-container' >
        <main className='row align-items-center'>
          {/* Left Side - Text */}
          <div className="col-lg-6 col-md-6 col-12 text-center text-md-start">
            <h1 className="heading display-5 fw-bold text-nowrap">
              Unleash the Joy <span className="text-primary"></span> of <span className="change">Rentals!</span>
            </h1> <br />
            <p className="lead text-muted mt-3">
              Find your perfect home, hassle-free. Comfortable, affordable, and just a click away!
            </p>
            <button className="btn btn-primary mt-3 px-4 py-2 fw-semibold" onClick={() => document.getElementById('searchSection').scrollIntoView({ behavior: 'smooth' })}>Get Started</button>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center">
            <img
              src="/Homebackground.png"
              alt="Background"
              id="homeimg"
              className="img-fluid"
              style={{ maxHeight: '600px' }}/>
          </div>

          <div className="container my-5 text-center mt-5">

            <h2 className="fw-bold mb-4 heading2">Why Choose Us?</h2>
            <div className="row gy-4">
              {[
                { icon: "fas fa-tag text-primary", title: "Lowest Price Guarantee ✅", text: "Get the best deals on rentals with our price-match guarantee. Affordability meets quality!" },
                { icon: "fas fa-headset text-success", title: "24/7 Support ✅", text: "Our support team is available around the clock to help you with any inquiries or issues." },
                { icon: "fas fa-check-circle text-warning", title: "Verified Properties ✅", text: "Book with confidence! Our listings are carefully verified for security and reliability." }
              ].map((feature, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12 d-flex">
                  <div className="feature-box p-4 w-100">
                    <i className={`${feature.icon} fs-3 mb-3`}></i>
                    <h5 className="fw-bold">{feature.title}</h5>
                    <p className="text-muted">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="search-container position-relative" id="searchSection">
            <img
              className="search-image img-fluid"
              src="https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg"
              alt="Background"
            />
            <div className="overlay d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h2 className="text-white mb-4">Please Enter An Area To Proceed</h2>
                <div className="search-box d-flex justify-content-center">
                  <input
                    type="text"
                    placeholder="Search By Area..."
                    value={areaInput}
                    onChange={(e) => setAreaInput(e.target.value)}
                    className="search-input form-control"
                  />
                  <button onClick={searchHandle} className="search-button btn btn-light d-flex align-items-center justify-content-center">
                    <SearchIcon size={20} color="black" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section className="featured-properties-section py-5">
            <div className="container">
              {/* Featured Properties Header */}
              <h2 className="text-center mb-4 featured-heading">Featured Properties</h2>

              {/* Additional Image and Paragraph Section */}
              <div className="row mt-5">
                <div className="col-12 text-center featured-para">
                  <p>
                    Our featured properties offer great options whether you're looking
                    for a house, flat, or apartment. Start your journey with us today!
                  </p>
              </div>
              </div>
        
              {/* Featured Properties Cards */}
              <div className="row">
                {/* Card 1: Houses */}
                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="card">
                    <img
                      src="https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?uid=R185375474&ga=GA1.1.16088765.1739437243&semt=ais_hybrid"
                      alt="Houses"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Houses</h5>
                      <p className="card-text">
                        Explore our wide range of houses available for rent in your area.
                      </p>
                    </div>
                  </div>
                </div>
          
          {/* Card 2: Flats */}
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card">
              <img
                src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?uid=R185375474&ga=GA1.1.16088765.1739437243&semt=ais_hybrid"
                alt="Flats"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Flats</h5>
                <p className="card-text">
                  Browse through our collection of flats for rent in top locations.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Apartments */}
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card">
              <img
                src="https://img.freepik.com/free-photo/modern-residential-building_1268-14735.jpg?uid=R185375474&ga=GA1.1.16088765.1739437243&semt=ais_hybrid"
                alt="Apartments"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Apartments</h5>
                <p className="card-text">
                  Find luxurious apartments for rent at affordable prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
  </main>    
  </div>
    
  )
}

export default Home
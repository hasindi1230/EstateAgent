
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import Navigationbar from './Components/Navigationbar/Navigationbar'
import Home from './Components/Home/Home'
import SearchArea from './Components/SearchArea/SearchArea'
import SearchResults from './Components/SearchResults/SearchResults'
import Prop1 from './Components/Properties/prop1'
import Prop2 from './Components/Properties/prop2'
import Prop3 from './Components/Properties/prop3'
import Prop4 from './Components/Properties/prop4'
import Prop5 from './Components/Properties/prop5'
import Prop6 from './Components/Properties/prop6'
import Prop7 from './Components/Properties/prop7'
import Favorites from './Components/Properties/Favorites'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'



function PropertyDetails(){
  const {id} = useParams();
  if (id === 'prop1'){
    return<Prop1 />
  } else if (id=== 'prop2'){
    return<Prop2 />
  }else if(id === 'prop3'){
    return<Prop3 />
  }else if(id === 'prop4'){
    return<Prop4 />
  }else if(id === 'prop5'){
    return<Prop5 />
  }else if(id === 'prop6'){
    return<Prop6 />
  }else if(id === 'prop7'){
    return<Prop7 />
  }
}



function App() {


  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/SearchArea' element={<SearchArea />}></Route>
        <Route path='/SearchResults' element={<SearchResults />}></Route>
        <Route path='/Properties/:id' element={<PropertyDetails />} ></Route>
        <Route path='/Favorites' element={<Favorites />}></Route>
      </Routes>
      <Footer />
  
      
      
    </>
    
  )
}

export default App

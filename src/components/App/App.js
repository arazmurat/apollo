
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import BusinessList from '../BusinessList/BusinessList'
import Yelp from '../../Util/Yelp'
import React,{useState} from 'react'



function App() {
  const [businesses,setBusinesses]=useState([])
  
  const searchYelp=(term,location,sortBy)=>{
      Yelp.search(term,location,sortBy)
      .then(res=>{
        setBusinesses(res)
      })
 
  }
  
  return (
    <div>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
      
    </div>
  );
}

export default App;

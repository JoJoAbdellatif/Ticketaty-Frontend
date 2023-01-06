
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
import axios from "axios";
import Lottie from 'react-lottie';
import FlipCard from "../InfoCards/MatchCards";
import useFetch from '../useFetch';
export default function SearchMail() {
  const [searched , setSearched] = useState('');
  const [data,setData] = useState([])
  const handleSubmit = (e) => {
      e.preventDefault();
    
      
  };
  
  function search(e,id){
    id = id.split(' ')[0]
    axios.get(`https://ticketaty-shop.vercel.app/ticket/${id}`).then(function (response) {
      setData(response.data)
      console.log(data);
  })
  console.log(data);
    
    return
  }
  
  return(
    <div>
    <form onSubmit={handleSubmit} >  
        
              <div className="input-group input-group-lg">
              <div className='searchArea'>
              <div>
                 
                  <input className='searchbar' type="text" required value={searched} onChange={(e) => setSearched(e.target.value)} placeholder=" Email To Find" />
                  <Button  className= 'searchButton'class="button input-group-append" type="button" onClick={(e)=>search(e,searched)}>Search </Button>                 
                  </div>

                  <div class="buttons">
                    


</div>


              </div>
              </div> 



          </form>
      

          
</div>
 
    )
    }
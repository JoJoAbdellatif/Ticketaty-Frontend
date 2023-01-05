
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
import axios from "axios";
import Lottie from 'react-lottie';
import FlipCard from "../InfoCards/MatchCards";
import useFetch from '../useFetch';
export default function Search() {
  const [searched , setSearched] = useState('');
  const [data,setData] = useState([])
  const handleSubmit = (e) => {
      e.preventDefault();
    
      
  };
  
  function search(e,id){
    
    axios.get(`https://ticketaty-shop.vercel.app/search/${id}`).then(function (response) {
        setData(response.data)
        console.log(data);
    })
    console.log(id); 
    return
  }
  
  return(
        <div>
          <form onSubmit={handleSubmit} >  
            <div className='searchArea'>   
                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            
                        </div>
                        <input type="text" required value={searched} onChange={(e) => setSearched(e.target.value)} placeholder="Search" className=""  /><br /><br></br>
                        
                        <div class="input-group-append">
                        <Button onClick={(e)=>search(e,searched)}>Search</Button>
                           
                        </div>
                    </div><br></br>
                   
                    </div>   
                </form>
            
      {data &&   data.map((card) => (
              <FlipCard key={card._id} card={card} />
            ))}
                
      </div>
 
    )
    }
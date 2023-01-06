
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
import axios from "axios";
import Lottie from 'react-lottie';
import useFetch from '../useFetch';
import PurchasesCard from '../InfoCards/PurchasesCard';
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
            <div className='searchArea'>   
                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            
                        </div>
                        <input type="text" required value={searched} onChange={(e) => setSearched(e.target.value)} placeholder="Search" className="searchbar"  />
                        
                        <div class="input-group-append">
                        <Button type='button' className='button input-group-append' onClick={(e)=>search(e,searched)}>Search</Button>
                           
                        </div>
                    </div><br></br>
                   
                    </div>   
                </form>
                {data &&   data.map((card) => (
              <PurchasesCard key={card._id} card={card} />
            ))}
                
      </div>
 
    )
    }
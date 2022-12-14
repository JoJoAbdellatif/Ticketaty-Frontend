
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
import axios from "axios";
import Lottie from 'react-lottie';
import FlipCard from "../InfoCards/MatchCards";
import useFetch from '../useFetch';
import { Navigate,useNavigate } from "react-router-dom";
export default function Search() {
  const navigate = useNavigate();

  const [searched , setSearched] = useState('');
  const [data,setData] = useState([])
  const handleSubmit = (e) => {
      e.preventDefault();
    
      
  };
  
  function search(e,id){
    
    axios.get(`https://ticketaty-security.vercel.app/search/${id}`).then(function (response) {
        setData(response.data)
        console.log(data);
    }).catch(e=>{
      navigate('/Error')

    }  )
    console.log(id); 
    return
  }
  
  return(
        <div>
          <form onSubmit={handleSubmit} >  
              
                    <div className="input-group input-group-lg">
                    <div className='searchArea'>
                    <div>
                       
                        <input className='searchbar' type="text" required value={searched} onChange={(e) => setSearched(e.target.value)} placeholder=" Search" />
                        <Button  className= 'searchButton'class="button input-group-append" type="button" onClick={(e)=>search(e,searched)}>Search</Button>                 
                        </div>

                        <div class="buttons">
                          
    

      </div>


                    </div>
                    </div> 


 
                </form>
                <div className='Results'>
            
      {data &&   data.map((card) => (
              <FlipCard key={card._id} card={card} />
            ))}
             </div>   
      </div>
 
    )
    }
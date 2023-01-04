
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import ShowCards from "../InfoCards/ShowCards";
import FlipCard from "../InfoCards/MatchCards";
import useFetch from "../useFetch";
import './search.css'
import axios from "axios";
export default function Search() {
    const [data,setData] = useState([])
    
    const items = [
        {
          id: 0,
          name: 'Qatar'
        },
        {
          id: 1,
          name: 'Equador'
        },
        {
          id: 2,
          name: 'Argentina'
        },
        {
          id: 3,
          name: 'France'
        },
        {
          id: 4,
          name: 'Brazil'
        },
        {
            id: 4,
            name: 'Croatia'
          }
      ]
    
      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log('https://ticketaty-shop.vercel.app/matches/search/' + string)
        axios.get('https://ticketaty-shop.vercel.app/matches/search/' + string).then((res)=>{
            setData(res.data)
        })
        
      }
    
    
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log('Selected')
  
      }
    
     
    
      const formatResult = (item) => {
        return (
          <>
           
            <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span>
          </>
        )
      }
    
      return (
        <div className="App">
          <header className="searchArea">
            <div style={{ width: 400 }}>
              <ReactSearchAutocomplete
                items={items}
                onSearch= {handleOnSearch}
                onClick={(e)=>handleOnSearch()}
                onSelect={handleOnSelect()}
            
                
                formatResult={formatResult}
              />
  
            </div>
          </header>
          <div>Results:</div>
          {data.map((card) => (
              <FlipCard key={card._id} card={card} />
            ))}
        </div>
      )
}

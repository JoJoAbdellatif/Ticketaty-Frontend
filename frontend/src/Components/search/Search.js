
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import ShowCards from "../Components/InfoCards/ShowCards";
import './search.css'
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
        console.log(string)
        
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
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
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
              />
            </div>
          </header>
          <div>Results:</div>
          <ShowCards/>
        </div>
      )
}

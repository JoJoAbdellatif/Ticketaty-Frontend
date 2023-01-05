
import React from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
export default function Search() {
    return(
        <div>
          <form >  
            <div className='searchArea'>   
                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            
                        </div>

                        <div className='bar'>
                        <input type="text" placeholder=" Search" className="searchbar"/>                 

                        <div class="buttons">
                          
      <button class="button input-group-append" type="button">Search</button>
     </div>
     </div>

                    </div>
                    </div> 


 
                </form>
                
      </div>
 
    )
    }
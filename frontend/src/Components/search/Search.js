
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
                        <input type="text" placeholder="Search" className=""  /><br /><br></br>
                        
                        <div class="input-group-append">
                        <Button>Search</Button>
                           
                        </div>
                    </div><br></br>
                   
                    </div>   
                </form>
                
      </div>
 
    )
    }
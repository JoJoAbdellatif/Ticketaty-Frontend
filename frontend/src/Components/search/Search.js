
import React from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
export default function Search() {
    
  function search(){
    console.log("searching")
  }
  
  return(
        <div>
          <form >  
            <div className='searchArea'>   
                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            
                        </div>
                        <input type="text" placeholder="Search" className=""  /><br /><br></br>
                        
                        <div class="input-group-append">
                        <Button onClick={(e)=>search()}>Search</Button>
                           
                        </div>
                    </div><br></br>
                   
                    </div>   
                </form>
                
      </div>
 
    )
    }
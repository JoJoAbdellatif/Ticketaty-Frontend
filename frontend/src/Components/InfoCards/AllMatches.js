import ShowCards from "./ShowCards"
import Pagination from 'react-bootstrap/Pagination';
import React, { render,useState,useEffect } from "react";
export default function AllMatches() {
    let [pageOn, setPage] = useState(0);

   function paginationClicked (event) {
        setPage(event.target.text-1);
        
      }
      
return (<div>
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
<ShowCards page={pageOn}

/>
<Pagination style={{display:'flex',justifyContent:'center'}}>
 <Pagination.Item key={1} onClick={(event) => paginationClicked(event)}>
   {1}
 </Pagination.Item>
 <Pagination.Item key={2} onClick={(event) => paginationClicked(event)}>
   {2}
 </Pagination.Item>
 <Pagination.Item key={3} onClick={(event) =>paginationClicked(event)}>
   {3}
 </Pagination.Item>
 <Pagination.Item key={4} onClick={(event) =>paginationClicked(event)}>
   {4}
 </Pagination.Item>
 <Pagination.Item key={5} onClick={(event) =>paginationClicked(event)}>
   {5}
 </Pagination.Item>
 <Pagination.Item key={6} onClick={(event) =>paginationClicked(event)}>
   {6}
 </Pagination.Item>
 <Pagination.Item key={7} onClick={(event) =>paginationClicked(event)}>
   {7}
 </Pagination.Item>
</Pagination>
</div>)

}
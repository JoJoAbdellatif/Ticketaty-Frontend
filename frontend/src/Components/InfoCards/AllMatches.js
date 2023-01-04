import ShowCards from "./ShowCards"
import Pagination from 'react-bootstrap/Pagination';
import React, { render,useState,useEffect } from "react";
export default function AllMatches() {
    let [pageOn, setPage] = useState(0);

   function paginationClicked (event) {
        setPage(event.target.text);
        
      }
      
return (<div>

<ShowCards page={pageOn}

/>
<Pagination>
 <Pagination.Item key={1} onClick={(event) => paginationClicked(event)}>
   {1}
 </Pagination.Item>
 <Pagination.Item key={2} onClick={(event) => paginationClicked(event)}>
   {2}
 </Pagination.Item>
 <Pagination.Item key={3} onClick={(event) =>paginationClicked(event)}>
   {3}
 </Pagination.Item>
</Pagination>
</div>)

}
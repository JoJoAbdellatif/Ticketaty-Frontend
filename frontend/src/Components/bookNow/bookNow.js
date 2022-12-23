
import "./booknow.scss";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
const match ={
    
        "_id": "639c7980d4aadd7d87861826",
        "matchNumber": 3,
        "roundNumber": 1,
        "dateUtc": "2022-11-21T13:00:00Z",
        "location": "Khalifa International Stadium",
        "availability": {
            "category1": {
                "count": 18,
                "price": 75,
                "pending": 1
            },
            "category2": {
                "count": 18,
                "price": 125,
                "pending": 18
            },
            "category3": {
                "count": 20,
                "price": 195,
                "pending": 20
            }
        },
        "homeTeam": "England",
        "homeTeamFlag": "https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg",
        "awayTeam": "Iran",
        "group": "B",
        "awayTeamFlag": "https://cdn.britannica.com/22/1722-004-EAD033D8/Flag-Iran.jpg "
    
}
export default function BookNow() {
    let [quan1, setQuan1] = useState(0);
    let [quan2, setQuan2] = useState(0);
    let [quan3, setQuan3] = useState(0);
    let [Order, setOrder] = useState([]);
    let [Total, setTotal] = useState(0);

  function incrementCount(count, setCount,cat) {
    if(count>=2){
        alert('Sorry, you can only buy 2 tickets at a time from each category')
        return
        
    }
    if(count<0){
        return
    }
    if(cat===1){
        if(quan2 !== 0 && quan3 !== 0){
            alert('Sorry, you can only buy from two categories at a time ')
            return
        }
        if(  match.availability.category1.pending-count<=0){
            alert('Sorry, Tickets Sold Out ')
            return
        }
        count = count + 1;
        setCount(count);
        Order.push(match.homeTeam + ' VS ' + match.awayTeam +  ' Category 1 Price:'+ match.availability.category1.price)
        setTotal(Total+match.availability.category1.price)
        setOrder(Order);
    }
    if(cat===2){
        if(quan1 !== 0 && quan3 !== 0){
            alert('Sorry, you can only buy from two categories at a time ')
            return
        }
        if(match.availability.category2.pending-count<=0){
            alert('Sorry, Tickets Sold Out ')
            return
        }
        count = count + 1;
        setCount(count);
        Order.push(match.homeTeam + ' VS ' + match.awayTeam +  ' Category 2 Price:'+ match.availability.category2.price)
        setTotal(Total+match.availability.category2.price)
        setOrder(Order);
        console.log(Order)
    }
    if(cat===3){
        if(quan1 !== 0 && quan2 !== 0){
            alert('Sorry, you can only buy from two categories at a time ')
            return
        }
        if(match.availability.category3.pending-count<=0){
            alert('Sorry, Tickets Sold Out ')
            return
        }
        count = count + 1;
        setCount(count);
        Order.push(match.homeTeam + ' VS ' + match.awayTeam +  ' Category 3 Price:'+ match.availability.category3.price)
        setTotal(Total+match.availability.category3.price)
        setOrder(Order);
    }

   
  }
  function decrementCount(count,setCount,cat) {
    if(count<=0){
        return
    }
    count = count - 1;
    setCount(count);
    if(cat===1){
        let carIndex = Order.indexOf( match.homeTeam + ' VS ' + match.awayTeam +  ' Category 1 Price:'+ match.availability.category1.price )
        Order.splice(carIndex, 1); 
        setOrder(Order);
        setTotal(Total-match.availability.category1.price)
    }
    if(cat===2){
        let carIndex = Order.indexOf( match.homeTeam + ' VS ' + match.awayTeam +  ' Category 2 Price:'+ match.availability.category2.price )
        Order.splice(carIndex, 1); 
        setOrder(Order);
        setTotal(Total-match.availability.category2.price)
    }
    if(cat===3){
        let carIndex = Order.indexOf( match.homeTeam + ' VS ' + match.awayTeam +  ' Category 3 Price:'+ match.availability.category3.price )
        Order.splice(carIndex, 1); 
        setOrder(Order);
        setTotal(Total-match.availability.category3.price)
    }
  }
  let date = match.dateUtc.split('T')[0]    
    return (
        
      <div className="Main">
       <div className="TicketInfo">
         <div className='Title'><h1>Ticket Info</h1></div>
         <div className="DateLoc">
         <div>Date: {date}</div> 
          
            <div className='loc'>Location: {match.location}</div>
            </div>
            <div className='info'> 
           <div> Match Number: {match.matchNumber}</div>
           <div> Round Number: {match.roundNumber}</div>
           
            <div>Group: {match.group}</div>
        </div>
            <div className="flags">
         <img className='Flag1'src={match.homeTeamFlag} ></img>
         VS
         <img className='Flag2'src={match.awayTeamFlag} ></img><br/>
        <div className="Label1">{match.homeTeam}</div>
         <div className="Label2">{match.awayTeam}
        </div><br/>
        </div>
       </div>
       <div className="PriceDetail">
       <h1 className='Title'>Order Details</h1>
       <ol>
        {Order.map(Order => (
          <li>{Order}</li>
        ))}

      </ol>
      Total = {Total}
      <div className="Pay">
        <Button className="PayButton">Pay</Button>
      </div>
       </div>
         <div className="category1">
         <h1 className='Title'> Category 1</h1>
         Count:{match.availability.category1.count}<br/>
           Price: {match.availability.category1.price}<br/>
           Pending: {match.availability.category1.pending}<br/>
           <div className='QuantitySection'>
           <Button className='addQuantity'onClick={e=>decrementCount(quan1,setQuan1,1)}>-</Button>
               <div className="quantity">{quan1}</div>
      <Button className='addQuantity'onClick={e=>incrementCount(quan1,setQuan1,1)}>+</Button>
      </div>
         </div>
         <div className="category2">
         <h1 className='Title'> Category 2</h1>
        Count:{match.availability.category2.count}<br/>
            Price:{match.availability.category2.price}<br/>
           Pending: {match.availability.category2.pending}
           <div className='QuantitySection'>
           <Button className='addQuantity'onClick={e=>decrementCount(quan2,setQuan2,2)}>-</Button>
               <div className="quantity">{quan2}</div>
      <Button className='addQuantity'onClick={e=>incrementCount(quan2,setQuan2,2)}>+</Button>
      </div>
         </div>
         <div className="category3">
           <h1 className='Title'> Category 3</h1>
         Count:{match.availability.category3.count}<br/>
            Price:{match.availability.category3.price}<br/>
           Pending: {match.availability.category3.pending}
           <div className='QuantitySection'>
           <Button className='addQuantity'onClick={e=>decrementCount(quan3,setQuan3,3)}>-</Button>
               <div className="quantity">{quan3}</div>
      <Button className='addQuantity'onClick={e=>incrementCount(quan3,setQuan3,3)}>+</Button>
      </div>
         </div>
          
      </div>
    );
  }
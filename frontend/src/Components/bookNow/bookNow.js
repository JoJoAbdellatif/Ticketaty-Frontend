
import "./booknow.scss";
import React, { render,useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from 'react-bootstrap/Button';
import ReCAPTCHA from "react-google-recaptcha";

import {motion} from 'framer-motion'
import { renderMatches } from "react-router-dom";
import axios from "axios"; 
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";


export default function BookNow() {
    let [quan1, setQuan1] = useState(0);
    let [quan2, setQuan2] = useState(0);
    let [quan3, setQuan3] = useState(0);
    let [Order, setOrder] = useState([]);
    let [Total, setTotal] = useState(0);
    let [CapVerified, setCapVerified] = useState(false);
   let price1 
    let price2
    let price3
     let date 
  const { id } = useParams();
  console.log(id)

  const { data: tas, error, isPending } = useFetch('https://ticketaty-shop.vercel.app/matches/' + id)
  const availability= tas.availability
  if(availability){
      price1 = availability.category1.price
      price2 = availability.category2.price
      price3 = availability.category3.price
     date = tas.dateUtc.split('T')[0]    

  }
  function incrementCount(count, setCount,cat,match1) {
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
        if(  match1.availability.category1.pending-count<=0){
            alert('Sorry, Tickets Sold Out ')
            return
        }
        count = count + 1;
        setCount(count);
        Order.push(match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 1 Price:'+ match1.availability.category1.price)
        setTotal(Total+match1.availability.category1.price)
        setOrder(Order);
    }
    if(cat===2){
        if(quan1 !== 0 && quan3 !== 0){
         alert('Sorry, you can only buy from two categories at a time ')
         return
        }
        if(match1.availability.category2.pending-count<=0){
            alert('Sorry, Tickets Sold Out ')
            return
        }
        count = count + 1;
        setCount(count);
        Order.push(match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 2 Price:'+ match1.availability.category2.price)
        setTotal(Total+match1.availability.category2.price)
        setOrder(Order);
        console.log(Order)
    }
    if(cat===3){
        if(quan1 !== 0 && quan2 !== 0){
            alert('Sorry, you can only buy from two categories at a time ')
            return
        }
        if(match1.availability.category3.pending-count<=0){
            alert('Sorry, Tickets Sold Out ')
            return
        }
        count = count + 1;
        setCount(count);
        Order.push(match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 3 Price:'+ match1.availability.category3.price)
        setTotal(Total+match1.availability.category3.price)
        setOrder(Order);
    }

   
  }
  function decrementCount(count,setCount,cat,match1) {
    if(count<=0){
        return
    }
    count = count - 1;
    setCount(count);
    if(cat===1){
        let carIndex = Order.indexOf( match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 1 Price:'+ match1.availability.category1.price )
        Order.splice(carIndex, 1); 
        setOrder(Order);
        setTotal(Total-match1.availability.category1.price)
    }
    if(cat===2){
        let carIndex = Order.indexOf( match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 2 Price:'+ match1.availability.category2.price )
        Order.splice(carIndex, 1); 
        setOrder(Order);
        setTotal(Total-match1.availability.category2.price)
    }
    if(cat===3){
        let carIndex = Order.indexOf( match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 3 Price:'+ match1.availability.category3.price )
        Order.splice(carIndex, 1); 
        setOrder(Order);
        setTotal(Total-match1.availability.category3.price)
    }
  }


  function onChange(){
    setCapVerified(true)
  }
    return (
        
      <motion.div className="Main"
      initial={{width:0}}
      animate={{width:'96%',transition:{duration:'0.2'}}}
      exit={{x:'96%'}}
      
      >
       <div className="TicketInfo">
         <div className='Title'><h1>Ticket Info</h1></div>
         <div className="DateLoc">
         <div>Date: {date}</div> 
          
            <div className='loc'>Location: {tas.location}</div>
            </div>
            <div className='info'> 
           <div> Match Number: {tas.matchNumber}</div>
           <div> Round Number: {tas.roundNumber}</div>
           
            <div>Group: {tas.group}</div>
        </div>
            <div className="flags">
         <img className='Flag1'src={tas.homeTeamFlag} ></img>
         VS
         <img className='Flag2'src={tas.awayTeamFlag} ></img><br/>
        <div className="Label1">{tas.homeTeam}</div>
         <div className="Label2">{tas.awayTeam}
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
        <ReCAPTCHA className="Recaptcha"
       sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
         onChange={e=>onChange()} 

        />
        <Button  className="PayButton" disabled = {!CapVerified}>Pay</Button>
      </div>
       </div>
         <div className="category1">
         <h1 className='Title'> Category 1</h1>
   
           Price: {price1}<br/>
      
           <div className='QuantitySection'>
           <Button className='addQuantity'onClick={e=>decrementCount(quan1,setQuan1,1,tas)}>-</Button>
               <div className="quantity">{quan1}</div>
      <Button className='addQuantity'onClick={e=>incrementCount(quan1,setQuan1,1,tas)}>+</Button>
      </div>
         </div>
         <div className="category2">
         <h1 className='Title'> Category 2</h1>
      
            Price:{price2}<br/>
       
           <div className='QuantitySection'>
           <Button className='addQuantity'onClick={e=>decrementCount(quan2,setQuan2,2,tas)}>-</Button>
               <div className="quantity">{quan2}</div>
      <Button className='addQuantity'onClick={e=>incrementCount(quan2,setQuan2,2,tas)}>+</Button>
      </div>
         </div>
         <div className="category3">
           <h1 className='Title'> Category 3</h1>
      
            Price:{price3}<br/>
      
           <div className='QuantitySection'>
           <Button className='addQuantity'onClick={e=>decrementCount(quan3,setQuan3,3,tas)}>-</Button>
               <div className="quantity">{quan3}</div>
      <Button className='addQuantity'onClick={e=>incrementCount(quan3,setQuan3,3,tas)}>+</Button>
      </div>
         </div>
          
      </motion.div>
    );
  }
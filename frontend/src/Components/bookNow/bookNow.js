
import "./booknow.scss";
import React, { render,useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from 'react-bootstrap/Button';
import ReCAPTCHA from "react-google-recaptcha";
import InputGroup from 'react-bootstrap/InputGroup';
import {calcLength, motion} from 'framer-motion'
import { renderMatches } from "react-router-dom";
import axios from "axios"; 
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Form from 'react-bootstrap/Form';
import Feedback from 'react-bootstrap/Feedback';






export default function BookNow() {
  

  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardYearexp, setCardYearexp] = useState('');
  const [cardMonthexp, setCardMonthexp] = useState('');
  const [cardCvc, setCardCvc] = useState('');

    let [quan1, setQuan1] = useState(0);
    let [quan2, setQuan2] = useState(0);
    let [quan3, setQuan3] = useState(0);
    let [Order, setOrder] = useState([]);
    let [Total, setTotal] = useState(0);
    let [CapVerified, setCapVerified] = useState(false);
    let price1 
    let price2
    let price3
    let [cats, setCats] = useState(0);
    let[price, setPrice] = useState(0);
    let[quan, setQuan] = useState(0);
   
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


  const [validated, setValidated] = useState(false);

  const handleSubmit =  (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);


    if(CapVerified===false){
        alert('Please verify you are not a robot')
        return
    }
    if(quan1===0 && quan2===0 && quan3===0){
        alert('Please select at least one ticket')
        return
    }
    if(quan1>0){
      setCats(1)
      setQuan(quan1)
      setPrice(price1)
    }
    if(quan2>0){
      setCats(2)
      setQuan(quan2)
      setPrice(price2)
    }
    if(quan3>0){
      setCats(3)
      setQuan(quan3)
      setPrice(price3)
    }
    

    alert('Your Order is being processed')
  
  
    
  };


  function TestClick(){
    console.log('test')
    const url = "http://localhost:5000/api/reservation";
    axios.get("http://localhost:5000/api/health")
    axios.post(url ,
      {
          email: 'yahiaabbas03@gmail.com',
          matchNumber: 43,
          tickets:
              {
                  category: 1,
                  quantity: 2,
                  price:75
              },
          card:{
              number:'4242424242424242',
              expirationMonth:12,
              expirationYear:30,
              cvc:'123'
          }
      }
      , {
          headers: { "Accept-Encoding": "gzip,deflate,compress" }
      })
      .then((response) => alert(response.data))
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
        if(quan2 !== 0 || quan3 !== 0){
            alert('Sorry, you can only buy from one categories at a time ')
            return
        }
        if(  match1.availability.category1.available-count<=0){
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
        if(quan1 !== 0 || quan3 !== 0){
         alert('Sorry, you can only buy from one categories at a time ')
         return
        }
        if(match1.availability.category2.available-count<=0){
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
        if(quan1 !== 0 || quan2 !== 0){
            alert('Sorry, you can only buy from one categories at a time ')
            return
        }
        if(match1.availability.category3.available-count<=0){
            alert('Sorry, Tickets Sold Out ')
            return
        }
        count = count + 1;
        setCount(count);
        Order.push(match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 3 Price:'+ match1.availability.category3.price)
        setTotal(Total+match1.availability.category3.price)
        setOrder(Order);
    }
    console.log({
      email: email,
      matchNumber: id,
      tickets:
          {
              category: cats,
              quantity: quan,
              price:price
          },
      card:{
          number:cardNumber,
          expirationMonth:cardMonthexp,
          expirationYear:cardYearexp,
          cvc: cardCvc
      }
  
  })
   
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
      
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <InputGroup className="mb-3" hasValidation>
        <InputGroup.Text id="inputGroup-sizing-default" >
          Email
        </InputGroup.Text>
        <Form.Control
        type='email' 
        

          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          required value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
              Please enter a valid email address
            </Form.Control.Feedback>
      
      </InputGroup>
      <div style={{padding:'30px'}}>
      <InputGroup className="mb-3" hasValidation>
        <InputGroup.Text id="inputGroup-sizing-default">
          Card Number
        </InputGroup.Text>
       
        
 <Form.Control
        required value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} 
        pattern="[\d| ]{16,22}"
        aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <Form.Control.Feedback type="invalid">
              Please enter a valid Credit Card Number
            </Form.Control.Feedback>
      </InputGroup>


      <InputGroup className="mb-3" hasValidation>
      <InputGroup.Text>Expiration</InputGroup.Text>
      <Form.Control placeholder='Month'aria-label="Month"
       required value={cardMonthexp} onChange={(e) => setCardMonthexp(e.target.value)} 
      pattern="(0[1-9]|1[012])"
       />
        
      <Form.Control placeholder='Year'aria-label="Year" 
       required value={cardYearexp} onChange={(e) => setCardYearexp(e.target.value)} 
      pattern="[\d]{2}"
      />
      <Form.Control.Feedback type="invalid">
              Please enter a valid Month/Year
            </Form.Control.Feedback>
    </InputGroup>


    <InputGroup className="mb-3" hasValidation>
        <InputGroup.Text id="inputGroup-sizing-default">
          CVC
        </InputGroup.Text>
        <Form.Control
        required value={cardCvc} onChange={(e) => setCardCvc(e.target.value)}
pattern="[\d]{3}"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <Form.Control.Feedback type="invalid">
              Please enter a valid CVC
            </Form.Control.Feedback>
      </InputGroup>



      </div>     
      <div className="Pay">
        <ReCAPTCHA className="Recaptcha"
       sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
         onChange={e=>onChange()} 

        />

        <button  type = "submit" className="PayButton" disabled = {!CapVerified}>Pay</button>
        <Button onClick={e=>TestClick()}>Post</Button>

      </div>
      </Form>
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
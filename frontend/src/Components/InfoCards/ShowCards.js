import FlipCard from "./MatchCards";
import Paginate from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import {motion} from 'framer-motion'
import axios from "axios"; 

import React, { render,useEffect,useState } from "react";


export default function ShowCards() {
    let [cards, setCards] = useState([]);

    const options = {
        url: 'https://ticketaty-shop.vercel.app/matches',
        method: 'GET',
        header: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        }
      };
      
     

        console.log(cards);

        useEffect(() => {
            axios(options)
            .then(response => {
             setCards(response.data);
            
            });
          }, []);
          
    return (
        
      <motion.div className=""
      initial={{width:0}}
      animate={{width:'100%',transition:{duration:'0.2'}}}
      exit={{x:'100%'}}>
      <div></div> 
      
            {cards.map((card) => (
              <FlipCard key={card._id} card={card} />
            ))}
          <Paginate/>
      </motion.div>
    );
  }
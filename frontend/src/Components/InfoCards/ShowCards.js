import FlipCard from "./MatchCards";
import Paginate from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import {motion} from 'framer-motion'
import axios from "axios"; 
import useFetch from "../useFetch";
import Pagination from 'react-bootstrap/Pagination';
import React, { render,useEffect,useState } from "react";
import { Button } from "bootstrap";
import Lottie from 'react-lottie';
import animationData from '../../lotties/loading.json';

export default function ShowCards(props) {
 const page = props.page
  const { data: cards2, error, isPending } = useFetch('https://ticketaty-shop.vercel.app/matches/'+ '?page=' + page)
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

 
    console.log(page);

          
    return (
        
      <motion.div className=""
      initial={{width:0}}
      animate={{width:'100%',transition:{duration:'0.2'}}}
      exit={{x:'100%'}}>
      
          
             {isPending && <div class="d-flex justify-content-center">
             <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />

</div>}
      {cards2 &&   cards2.map((card) => (
              <FlipCard key={card._id} card={card} />
            ))}
      
      </motion.div>
    );
  }
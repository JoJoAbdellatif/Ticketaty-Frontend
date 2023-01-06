import FlipCard from "./MatchCards";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import {motion} from 'framer-motion'
import axios from "axios"; 
import useFetch from "../useFetch";
import React, { render,useEffect,useState,isRendered,useRef } from "react";
import { Button } from "bootstrap";
import Lottie from 'react-lottie';
import animationData from '../../lotties/loading.json';

export default function ShowCards(props) {
 const page = props.page
  const [cards2, setCards2] = useState(null);
  const [isPending, setIsPending] = useState(true)
  useEffect(() => {
    isRendered = true;
    console.log(page);

        axios.get('https://ticketaty-security.vercel.app/matches'+ '?p=' + page)
        .then(res => {
            if (isRendered) {
              setCards2(Object.assign(res.data))
            }

            setIsPending(false)
            return null;

        })
        .catch(err => console.log(err))   
      
    return () => {
        isRendered = false;
    };
}, [page]);

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
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import { useState } from "react";
import cn from "classnames";

function FlipCard() {
    const card = {  
        
            id: "63976f75d4aadd7d875e8ec9",
            matchNumber: 1,
            roundNumber: 1,
            dateUtc: "2022-11-20T16:00:00Z",
            location: "Al Bayt Stadium",
        
            homeTeam: "Qatar",
            awayTeam: "Ecuador",
            group: "A",
    }

  const [showBack, setShowBack] = useState(false); 

  function handleClick() {  
      setShowBack(!showBack); 

  } 

  return (
    <div
      className="flip-card-outer"
      onClick={handleClick} 
    >
      <div
        className={cn("flip-card-inner", {
          showBack, 
          "click-trigger": "click"
        })}
      >
        <div className="card front">    
        <div className="card-body">
                <h5 className="title">{card.homeTeam} vs {card.awayTeam}</h5>
            </div>
        </div>
        <div className="card back">
        <h5 className="card-title">{card.matchNumber}</h5>
      
        <h5 className="card-title">    {card.roundNumber}</h5>
        <h5 className="card-title">
           {card.dateUtc}</h5>
        <h5 className="card-title">
           {card.location}</h5>
        <h5 className="card-title">
           {card.group}</h5>
        
           
        
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
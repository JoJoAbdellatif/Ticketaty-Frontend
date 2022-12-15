import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import { useState } from "react";
import cn from "classnames";
import Button from 'react-bootstrap/Button';

function FlipCard({card}) {
   

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
        <div>
      <Button variant="primary">Primary</Button>
      </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
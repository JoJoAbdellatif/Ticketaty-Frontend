import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import { useState } from "react";
import cn from "classnames";
import Button from 'react-bootstrap/Button';
import { alignPropType } from "react-bootstrap/esm/types";

function FlipCard({card}) {
   

  const [showBack, setShowBack] = useState(false); 
  const date ="   "+ card.dateUtc.split("T")[0];
  const time = card.dateUtc.split("T")[1];
  function handleClick() {  
      setShowBack(!showBack); 

  } 

  return (
    <div className="container1">

    
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
        <img className='Homeimage'src={card.homeimage} ></img>
                <h5 className="Hometitle">{card.homeTeam}</h5>
               
                <img className='Awayimage'src={card.awayimage} ></img>
                <h5 className="Awaytitle">{card.awayTeam}</h5>
              <div className="vs">VS</div>            
            <div className="textFront">
            Flip To See More
            </div>
                <Button className='booknowbutton'variant="primary" href={"/match/1"} >Book Now!</Button>
     
            </div>
       
        </div>
        <div className="card back">
          <div          className="Match">
        <h5 className="card-title">Match Number:  {card.matchNumber}</h5>
        </div>
        <div className="Round">
        <h5 className="card-title">Round Number:  {card.roundNumber}</h5>
        </div>
        <div className="Group">
        <h5 className="card-title">Group:  {card.group}</h5>
        </div>
        <div className="Dateloc">
        <h5 className="card-title"> FIFA World Cup 2022™{date}</h5>
        {/* <h5 className="card-title"> {time}</h5> */}

     
        </div >
        <div className="loc" >
        <h5 className="card-title">  Location: {card.location}</h5>
        </div>
        <div >
        <Button className='booknowback'variant="primary" href="/match/1" >
      
      Book Now!</Button>
      </div>
        </div>
      </div>
   
    </div>
   
    </div>
  );
}

export default FlipCard;
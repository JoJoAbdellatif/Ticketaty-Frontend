import FlipCard from "./MatchCards";
import Paginate from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const cards = [
 {
  "_id": "63976f75d4aadd7d875e8ec9",
  "matchNumber": 1,
  "roundNumber": 1,
  "dateUtc": "2022-11-20T16:00:00Z",
  "location": "Al Bayt Stadium",
  "availability": {
      "category1": {
          "count": 19,
          "price": 75
      },
      "category2": {
          "count": 18,
          "price": 125
      },
      "category3": {
          "count": 20,
          "price": 195
      }
  },
  "homeTeam": "Qatar",
  "awayTeam": "Ecuador",
  "homeimage":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Qatar_%283-2%29.svg/1200px-Flag_of_Qatar_%283-2%29.svg.png",
    "awayimage":"https://media.istockphoto.com/id/689094754/vector/flag-of-ecuador.jpg?s=612x612&w=0&k=20&c=up-thIaaQ5h_XtoCXOwUJHu3PsMnPOcKR0Vv-jUhf1c=",
  "group": "A",
  "category1": {
      "count": 19
  }
},
{
    "_id": "63976f75d4aadd7d875e8ec9",
    "matchNumber": 1,
    "roundNumber": 1,
    "dateUtc": "2022-11-20T16:00:00Z",
    "location": "Al Bayt Stadium",
    "availability": {
        "category1": {
            "count": 19,
            "price": 75
        },
        "category2": {
            "count": 18,
            "price": 125
        },
        "category3": {
            "count": 20,
            "price": 195
        }
    },
    "homeTeam": "Qatar",
    "awayTeam": "Ecuador",
    "homeimage":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Qatar_%283-2%29.svg/1200px-Flag_of_Qatar_%283-2%29.svg.png",
      "awayimage":"https://media.istockphoto.com/id/689094754/vector/flag-of-ecuador.jpg?s=612x612&w=0&k=20&c=up-thIaaQ5h_XtoCXOwUJHu3PsMnPOcKR0Vv-jUhf1c=",
    "group": "A",
    "category1": {
        "count": 19
    }
  },
  {
    "_id": "63976f75d4aadd7d875e8ec9",
    "matchNumber": 1,
    "roundNumber": 1,
    "dateUtc": "2022-11-20T16:00:00Z",
    "location": "Al Bayt Stadium",
    "availability": {
        "category1": {
            "count": 19,
            "price": 75
        },
        "category2": {
            "count": 18,
            "price": 125
        },
        "category3": {
            "count": 20,
            "price": 195
        }
    },
    "homeTeam": "Qatar",
    "awayTeam": "Ecuador",
    "homeimage":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Qatar_%283-2%29.svg/1200px-Flag_of_Qatar_%283-2%29.svg.png",
      "awayimage":"https://media.istockphoto.com/id/689094754/vector/flag-of-ecuador.jpg?s=612x612&w=0&k=20&c=up-thIaaQ5h_XtoCXOwUJHu3PsMnPOcKR0Vv-jUhf1c=",
    "group": "A",
    "category1": {
        "count": 19
    }
  },
  {
    "_id": "63976f75d4aadd7d875e8ec9",
    "matchNumber": 1,
    "roundNumber": 1,
    "dateUtc": "2022-11-20T16:00:00Z",
    "location": "Al Bayt Stadium",
    "availability": {
        "category1": {
            "count": 19,
            "price": 75
        },
        "category2": {
            "count": 18,
            "price": 125
        },
        "category3": {
            "count": 20,
            "price": 195
        }
    },
    "homeTeam": "Qatar",
    "awayTeam": "Ecuador",
    "homeimage":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Qatar_%283-2%29.svg/1200px-Flag_of_Qatar_%283-2%29.svg.png",
      "awayimage":"https://media.istockphoto.com/id/689094754/vector/flag-of-ecuador.jpg?s=612x612&w=0&k=20&c=up-thIaaQ5h_XtoCXOwUJHu3PsMnPOcKR0Vv-jUhf1c=",
    "group": "A",
    "category1": {
        "count": 19
    }
  }


]


export default function ShowCards() {
    return (
        
      <div className="">
      <div></div> 
      
            {cards.map((card) => (
              <FlipCard key={card.id} card={card} />
            ))}
          <Paginate/>
      </div>
    );
  }
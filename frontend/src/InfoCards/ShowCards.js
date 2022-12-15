import FlipCard from "./MatchCards";

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
  "group": "A",
  "category1": {
      "count": 19
  }
}

]


export default function ShowCards() {
    return (
      <div className="container">
        <div className="row h-100">
          <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
            {cards.map((card) => (
              <FlipCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    );
  }
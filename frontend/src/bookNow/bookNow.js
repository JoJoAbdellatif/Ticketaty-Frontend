
import "bootstrap/dist/css/bootstrap.min.css";
import "./booknow.scss";

const match ={
    
        "_id": "639c7980d4aadd7d87861826",
        "matchNumber": 3,
        "roundNumber": 1,
        "dateUtc": "2022-11-21T13:00:00Z",
        "location": "Khalifa International Stadium",
        "availability": {
            "category1": {
                "count": 18,
                "price": 75,
                "pending": 18
            },
            "category2": {
                "count": 18,
                "price": 125,
                "pending": 18
            },
            "category3": {
                "count": 20,
                "price": 195,
                "pending": 20
            }
        },
        "homeTeam": "England",
        "homeTeamFlag": "https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg",
        "awayTeam": "Iran",
        "group": "B",
        "awayTeamFlag": "https://cdn.britannica.com/22/1722-004-EAD033D8/Flag-Iran.jpg "
    
}
export default function BookNow() {

    return (
        
      <div className="Main">
       <div className="TicketInfo">Took the money

       </div>
       <div className="PriceDetail">
        Starved my body
       </div>
         <div className="category1">
            hosted parties
         </div>
         <div className="category2">
            hosted parties
         </div>
         <div className="category3">
            hosted parties
         </div>
          
      </div>
    );
  }
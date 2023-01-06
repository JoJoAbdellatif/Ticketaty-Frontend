import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";



function PurchasesCard({card}) {
   
    return(
        <div className="container0">
        <div className="container2">
            <div className="row align-left">
                <h4><u>Purchase Details</u></h4>
<div className="align-left ">
            <div className="row">
                
                <div className="col">
                    <h5 className="card-title">Match Number: {card.matchNumber}</h5>
                    </div>
                    
                    <div className="col">
                   
                    <h5 className="card-title align-right">Category: {card.category} </h5>
                    </div>
                    </div>

                    <div className="row align-left">
                <h4><u>Ticket Details</u></h4>
                </div>


                    <div className="row">
                    <div className="col">
                    <h5 className="card-title">Quantity: {card.quantity}</h5>
                    </div>
                    
                    <div className="col align-right">

                    <h5 className="card-title">Price: {card.price}</h5>
                    </div>
                    </div>
                    </div>

            
                    </div>
                    </div>
                    </div>
    );
}
    export default PurchasesCard;
 
  export function incrementCount(count, setCount,cat,match1) {
    if(count>=2){
        alert('Sorry, you can only buy 2 tickets at a time from each category')
        return
        
    }
    if(count<0){
        return
    }
    if(cat===1){
        if(quan2 !== 0 && quan3 !== 0){
            alert('Sorry, you can only buy from two categories at a time ')
            return
        }
        if(  match1.availability.category1.pending-count<=0){
            alert('Sorry, Tickets Sold Out ')
            return
        }
        count = count + 1;
        setCount(count);
        Order.push(match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 1 Price:'+ match1.availability.category1.price)
        setTotal(Total+match1.availability.category1.price)
        setOrder(Order);
    }
    if(cat===2){
        if(quan1 !== 0 && quan3 !== 0){
         alert('Sorry, you can only buy from two categories at a time ')
         return
        }
        if(match1.availability.category2.pending-count<=0){
            alert('Sorry, Tickets Sold Out ')
            return
        }
        count = count + 1;
        setCount(count);
        Order.push(match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 2 Price:'+ match1.availability.category2.price)
        setTotal(Total+match1.availability.category2.price)
        setOrder(Order);
        console.log(Order)
    }
    if(cat===3){
        if(quan1 !== 0 && quan2 !== 0){
            alert('Sorry, you can only buy from two categories at a time ')
            return
        }
        if(match1.availability.category3.pending-count<=0){
            alert('Sorry, Tickets Sold Out ')
            return
        }
        count = count + 1;
        setCount(count);
        Order.push(match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 3 Price:'+ match1.availability.category3.price)
        setTotal(Total+match1.availability.category3.price)
        setOrder(Order);
    }

   
  }
  export function decrementCount(count,setCount,cat,match1) {
    if(count<=0){
        return
    }
    count = count - 1;
    setCount(count);
    if(cat===1){
        let carIndex = Order.indexOf( match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 1 Price:'+ match1.availability.category1.price )
        Order.splice(carIndex, 1); 
        setOrder(Order);
        setTotal(Total-match1.availability.category1.price)
    }
    if(cat===2){
        let carIndex = Order.indexOf( match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 2 Price:'+ match1.availability.category2.price )
        Order.splice(carIndex, 1); 
        setOrder(Order);
        setTotal(Total-match1.availability.category2.price)
    }
    if(cat===3){
        let carIndex = Order.indexOf( match1.homeTeam + ' VS ' + match1.awayTeam +  ' Category 3 Price:'+ match1.availability.category3.price )
        Order.splice(carIndex, 1); 
        setOrder(Order);
        setTotal(Total-match1.availability.category3.price)
    }
  }
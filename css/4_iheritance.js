function wrestling(event,championship,winner,year){
    this.event = event;
    this.championship = championship;
    this.winner = winner;
    this.year = year;
    }
    
    wrestling.prototype.getSummary = function (){
        return`${this.winner} was the ${this.championship}  champion at ${this.event} in ${this.year}`
    }

    function nxt(event,championship,winner,year){
        wrestling.call(this,event,championship,winner,year);
    

    }

    const nxt1 = new nxt('tables ladders and chairs','money in the bank','kevin owens','2017','jan')

    console.log(nxt1)
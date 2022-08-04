//object literal

const wrestling = {
    event: 'summerslam',
    championship: 'heavyweight',
    winner: 'roman',
    year: 2016,
    getSummary: function(){
        `return${this.winner} was the  ${this.championship} champion in ${this.year}  AT ${this.event} event`
    }

}

const wrestling1 = {
    event: 'wrestlemania',
    championship: 'unniversal championship',
    winner: 'seth rollins',
    year: 2018,
    getSummary: function(){
        `return${this.winner} was the  ${this.championship} champion in ${this.year}  AT ${this.event} event`
    }

}


 
console.log(wrestling);
console.log(wrestling1);
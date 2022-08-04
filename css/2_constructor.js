// constructor
function wrestling(event,championship,winner,year){
this.event = event;
this.championship = championship;
this.winner = winner;
this.year = year;
}

wrestling.prototype.getSummary = function (){
    return`${this.winner} was the ${this.championship}  champion at ${this.event} in ${this.year}`
}

wrestling.prototype.getAge = function(){
    const years = new Date().getFullYear()- this.year;
    return`${this.winner} has been ${this.championship} champion for ${years} years`;

}

wrestling.prototype.revise = function(newyear){
this.year = newyear;
this.revise = true;
}

const wrestling1 = new wrestling('wrestlemania','unniversal','seth rollins',2016);
const wrestling2 = new wrestling('summerslam','money in the bank','roman reigns',2018);

console.log(wrestling2.getSummary());
console.log(wrestling1.getAge());
wrestling1.revise('2019');
console.log(wrestling1);

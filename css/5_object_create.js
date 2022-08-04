const wrestlingProtos = {
getSummary: function(){
    return`${this.winner} was the ${this.championship}  champion at ${this.event} in ${this.year}`
}

getAge: function(){
    const years = new Date().getFullYear()- this.year;
    return`${this.winner} has been ${this.championship} champion for ${years} years`;

}
}

//object create object

const wrestling1 = object.create(wrestlingProtos);
wrestling1.event = 'summerslam';
wrestling1.winner ='roman reighns';
wrestling1.championship = 'universal championship';
wrestling1.year = '2017';

console.log(wrestling1);




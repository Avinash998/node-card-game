var {Card} = require('./card');

class Deck{
    // let twoSpade = new Card('twoSpade',2,'spade','black');
    constructor(){
        this.list = [];
    }
    initilizeDeck(){
        this.list.push(new Card(2,'spade','black'));
        this.list.push(new Card(3,'spade','black'));
        this.list.push(new Card(4,'spade','black'));
        this.list.push(new Card(5,'spade','black'));
        this.list.push(new Card(6,'spade','black'));
        this.list.push(new Card(2,'heart','red'));
        this.list.push(new Card(3,'heart','red'));
        this.list.push(new Card(4,'heart','red'));
        this.list.push(new Card(5,'heart','red'));
        this.list.push(new Card(6,'heart','red'));
    }
    getlist(){
        return this.list;
    }

}

const deck1 = new Deck();
console.log(deck1);
deck1.initilizeDeck();
console.log(deck1);
var {Card} = require('./card');

class Deck{
    // let twoSpade = new Card('twoSpade',2,'spade','black');
    constructor(){
        this.list = [];
    }
    // Suffles the card in the deck
    suffle(){
        let length = this.list.length;
        for(let i=0;i<length; i++){
            let random = Math.floor(Math.random()*length);
            let swap = this.list[i];
            this.list[i] = this.list[random];
            this.list[random] = swap;
        }
        // console.log(this.list);
    }
    // Add Single card to the deck top of deck
    add(card){
        this.list.push(card);
    }
    // return top card from deck and remove from deck
    draw(){
        return this.list.pop();
    }
    // return entire list of cards present in the deck
    getlist(){
        return this.list;
    }

}

const deck1 = new Deck();
deck1.add(1);
deck1.add(2);
deck1.add(3);
deck1.add(4);
deck1.add(5);
console.log(deck1);
deck1.suffle();
module.exports = {Deck};
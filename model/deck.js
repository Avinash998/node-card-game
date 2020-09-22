var {Card} = require('./card');
var {Suit} = require('./suit');

class Deck{
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
    // push only card not other data in the list
    add(card){
        this.list.push(card);
    }
    // Add Entire suit to the deck
    addSuit(suit){
        suit.forEach(card => {
        this.add(card); 
        });
    }
    // return top card from deck and remove from deck
    draw(){
        if(this.list.length != 0){
            return this.list.pop();
        }
        else{
            console.log("Deck is Empty.");
        }
        
    }
    // return entire list of cards present in the deck
    getlist(){
        if(this.list.length != 0){
            return this.list;
        }
        else{
            console.log("Deck is Empty.");
        }
        
    }

}

// const deck1 = new Deck();
// deck1.add(1);
// deck1.add(2);
// deck1.add(3);
// deck1.add(4);
// deck1.add(5);
// console.log(deck1);
// deck1.suffle();
module.exports = {Deck};
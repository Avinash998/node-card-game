const {Card} = require('./card');

// Suit types clubs (♣), diamonds (♦), hearts (♥) and spades (♠)
class Suit{
    constructor(type,color){
        this.type = type;
        this.color = color;
        this.cards = this.initilise();
    }

    // Initilize all the cards in the suit
    initilise(){
        const two = new Card("two", 2, this.type, this.color);
        const three = new Card("three", 3, this.type, this.color);
        const four = new Card("four", 4, this.type, this.color);
        const five = new Card("five", 5, this.type, this.color);
        const six = new Card("six", 6, this.type, this.color);
        const seven = new Card("seven", 7, this.type, this.color);
        const eight = new Card("eight", 8, this.type, this.color);
        const nine = new Card("nine", 9, this.type, this.color);
        const ten = new Card("ten", 10, this.type, this.color);
        const jack = new Card("jack", 11, this.type, this.color);
        const queen = new Card("queen", 12, this.type, this.color);
        const king = new Card("king", 13, this.type, this.color);
        const ace = new Card("ace", 14, this.type, this.color);
        return [two,three,four,five,six,seven,eight,nine,ten,jack,queen,king,ace];
        // return [two,three,four];
        // return [two,three,four,five,six];
    }
    
    getsuit(){
        return this.cards;
    }
}

// let card = new Card("two", 2, this.type, this.color);
// console.log(card);
// const suit1= new Suit("heart", "red");
// console.log(suit1);
// console.log(suit1.suit);

module.exports = {Suit};
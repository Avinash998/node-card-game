class Card {
    constructor(name, value, type, color){
        this.name = name;
        this.value = value;
        this.type = type;
        this.color = color;
    }
    getValue(){
        return this.value;
    }
    getName(){
        return this.type+'-'+this.name;
    }
}

// let twoSpade = new Card("two",2,"spade","red");
// console.log(twoSpade.type);
module.exports = {Card};
class Card {
    constructor(name, value, type, color){
        this.name = name;
        this.value = value;
        this._status = 'unused';
        this.type = type;
        this.color = color;
    }
    get status(){
        return this._status;
    }
    changeStatus(){
        if(this._status == 'unused'){
            this._status = 'used';
        }
        else{
            this._status = 'unused';
        }
    }
}

// let twoSpade = new Card("two",2,"spade","red");
// console.log(twoSpade.type);
module.exports = {Card};
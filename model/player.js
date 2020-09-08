class Player{
    constructor(name){
        this.name = name;
        this.cards = [];
    }
    add(card){
        this.cards.push(card);
    }
    showLastCard(){
        return this.cards[this.cards.length-1];
    }
    showAllCards(){
        return this.list;
    }
}
const player = new Player("Aviansh");
console.log(player);
player.add(1);
player.add(2);
player.add(3);
player.add(4);
player.add(5);
console.log(player.showLastCard());
console.log(player.showAllCards());
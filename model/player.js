class Player{
    constructor(name){
        this.name = name;
        this.status = 'playing'; // playing | looser | winner
        this.hand = [];
    }

    // Add one card to the player's hand 
    add(card){
        this.hand.push(card);
    }

    getName(){
        return this.name;
    }

    // return players last hand
    showLastCard(){
        return this.hand[this.hand.length-1];
    }

    // return players all hand
    showAllCards(){
        return this.hand;
    }
}
// const player = new Player("Aviansh");
// console.log(player);
// player.add(1);
// player.add(2);
// player.add(3);
// player.add(4);
// player.add(5);
// console.log(player.showLastCard());
// console.log(player.showAllCards());
module.exports = {Player};
const {Card} = require('./card');
const {Player} = require('./player');
const {Deck} = require('./deck');
const {Suit} = require('./suit');
const {Rule} = require('./rule');

class Game{
    constructor(){
        this.players=[];     
    }
    // adding player to the table
    addPlayer(player){
        this.players.push(player);
    }
    getPlayerList(){
        return this.players;
    }
    start(){
        const avinash = new Player("Aviansh");
        const rahul = new Player("Rahul");
        // const anand = new Player("Anand");
        // const aman = new Player("Aman");
        this.addPlayer(avinash);
        this.addPlayer(rahul);
        // this.addPlayer(anand);
        // this.addPlayer(aman);
        const heart = new Suit("heart", "red");
        const diamond = new Suit("diamond", "red");
        const spade = new Suit("spade", "black");
        const club = new Suit("club", "black");
        const deck = new Deck();
        deck.addSuit(heart.getsuit());
        deck.addSuit(diamond.getsuit());
        deck.addSuit(spade.getsuit());
        deck.addSuit(club.getsuit());
        // console.log("--------------- Order of Cards in the Deck (Before Suffle)-------------------");
        // deck.getlist().forEach(name => {
        //     console.log(name.getName());
        // });
        console.log("---------------Order of Cards in the Deck (After Suffle)-------------------");
        deck.suffle();
        // deck.getlist().forEach(name => {
        //     console.log(name.getName());
        // });
        this.deal(deck);
        this.deal(deck);
        this.deal(deck);
        console.log("---------------Cards in the deck After 3 Deal-------------------");
        deck.getlist().forEach(name => {
            console.log(name.getName());
        });
        console.log("------------------Avinash card-----------------------");
        avinash.showAllCards().forEach(name => {
            console.log(name.getName());
        });
        console.log("------------------Rahul card-----------------------");
        rahul.showAllCards().forEach(name => {
            console.log(name.getName());
        });
        // console.log("------------------Anand card-----------------------");
        // anand.showAllCards().forEach(name => {
        //     console.log(name.getName());
        // });
        // console.log("------------------Aman card-----------------------");
        // aman.showAllCards().forEach(name => {
        //     console.log(name.getName());
        // });
        console.log("------------------Rules Check---------------------");
        // console.log(this.getPlayerList());
        const rule = new Rule();
        if(rule.threeCardTrailCheck(this.getPlayerList())){
            this.start();
        }

    }
    // dealing cards to the every palyer 
    deal(deck){
        for(let i=0; i<this.players.length; i++){
            this.players[i].add(deck.draw());
        }
    }

}
const game = new Game();
game.start();

module.exports = {Game};

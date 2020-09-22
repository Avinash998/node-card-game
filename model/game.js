const {Card} = require('./card');
const {Player} = require('./player');
const {Deck} = require('./deck');
const {Suit} = require('./suit');
const {Rule} = require('./rule');

class Game{
    constructor(){
        this.players=[];
        this.winner={};     
    }
    // adding player to the table
    addPlayer(player){
        this.players.push(player);
    }
    // remove loosing player from table
    removePlayer(p){
        this.players= this.players.filter(player => player !=p);
    }
    getPlayerList(){
        return this.players;
    }
    start(){
        const avinash = new Player("Aviansh");
        const rahul = new Player("Rahul");
        const anand = new Player("Anand");
        const aman = new Player("Aman");
        this.addPlayer(avinash);
        this.addPlayer(rahul);
        this.addPlayer(anand);
        this.addPlayer(aman);
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
        // deck.getlist().forEach(name => {
        //     console.log(name.getName());
        // });
        console.log("------------------Avinash card-----------------------");
        avinash.showAllCards().forEach(name => {
            console.log(name.getName());
        });
        console.log("------------------Rahul card-----------------------");
        rahul.showAllCards().forEach(name => {
            console.log(name.getName());
        });
        console.log("------------------Anand card-----------------------");
        anand.showAllCards().forEach(name => {
            console.log(name.getName());
        });
        console.log("------------------Aman card-----------------------");
        aman.showAllCards().forEach(name => {
            console.log(name.getName());
        });
        console.log("------------------Rules Check---------------------");
        // console.log(this.getPlayerList());
        const rule = new Rule();
        let winnerList = rule.threeCardTrailCheck(this.getPlayerList());
        while(winnerList.length != 1){
            this.players = winnerList;
            console.log("deal called");
            this.deal(deck);
            winnerList = rule.highestTopCardCheck(this.getPlayerList());
        }
        if(winnerList.length == 1){
            console.log(winnerList[0].getName())
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
// const avinash = new Player("Aviansh");
// const rahul = new Player("Rahul");
// const anand = new Player("Anand");
// const aman = new Player("Aman");
// game.addPlayer(avinash);
// game.addPlayer(rahul);
// game.addPlayer(anand);
// game.addPlayer(aman);
// console.log(game.getPlayerList());
// console.log("-------------------");
// game.removePlayer(anand);
// console.log(game.getPlayerList());
game.start();

module.exports = {Game};

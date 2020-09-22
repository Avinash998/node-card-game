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
    // get the list of all player currently in the table.
    getPlayerList(){
        return this.players;
    }
    // All rules check.
    start(){
        const rule = new Rule();
        let winnerList = rule.threeCardTrailCheck(this.getPlayerList());
        while(winnerList.length != 1){
            this.players = winnerList;
            console.log("No Rules are matching. Lets deal one more time.");
            this.deal(deck);
            winnerList = rule.highestTopCardCheck(this.getPlayerList());
        }
        if(winnerList.length == 1){
            console.log(`OMG ...........${winnerList[0].getName()} is our winner.`)
        }
    }

    // dealing cards to the every palyer 
    deal(deck){
        for(let i=0; i<this.players.length; i++){
            this.players[i].add(deck.draw());
        }
    }

}
// const game = new Game();
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
// game.start();

module.exports = {Game};

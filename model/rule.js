const {Player} = require('./player');
const {Card} = require('./card');
const {Game} = require('./game');
class Rule{
    constructor(){
        this.winner;
    }
    threeCardTrailCheck(game){
        for(let i=0; i<game.getPlayerList().length; i++){
            let currentPlayer = game.getPlayerList()[i];
            currentPlayer.showAllCards()[0].getValue();
        }
        player.showAllCards();
    }
    twoCardTrailCheck(player){

    }
    threeCardSecuenceCheck(player){

    }
    highestTopCardCheck(player){

    }
}
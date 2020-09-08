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
            let first = currentPlayer.showAllCards()[0].getValue();
            let second = currentPlayer.showAllCards()[1].getValue();
            let third = currentPlayer.showAllCards()[2].getValue();
            if((first == second)&&(first == third)){
                let value = first+second+third;
                if( this.winner.value == undefined || this.winner.value < value){
                    this.winner.name = currentPlayer.getName();
                    this.winner.value = value;
                }      
            }
        }
        if(this.winner.name != undefined){
            console.log(`Winner is ${this.winner.name}`);
        }
        else{
            this.twoCardTrailCheck(game);
        }
    }
    twoCardTrailCheck(player){

    }
    threeCardSecuenceCheck(player){

    }
    highestTopCardCheck(player){

    }
}
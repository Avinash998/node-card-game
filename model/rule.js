var _ = require('lodash');

const {Player} = require('./player');
const {Card} = require('./card');
const {Game} = require('./game');
class Rule{
    constructor(){
        this.winner = {};
    }
    threeCardTrailCheck(game){
        console.log(game.length);
        for(let i=0; i<game.length; i++){
            let currentPlayer = game[i];
            let currentCardList = currentPlayer.showAllCards();
            // console.log(currentPlayer.name);
            // console.log(currentPlayer.getName());
            // console.log(currentCardList);
            // console.log();
            let firstCard = currentCardList[0].getValue();
            let secondCard = currentCardList[1].getValue();
            let thirdCard = currentCardList[2].getValue();
            if((firstCard == secondCard)&&(firstCard == thirdCard)){
                let combineValue = firstCard+secondCard+thirdCard;
                if( Object.keys(this.winner).length == 0 || this.winner.value < value){
                    console.log();
                    this.winner.name = currentPlayer.getName();
                    this.winner.combineValue = combineValue;
                }      
            }
        }
        if(!_.isEmpty(this.winner)){

            console.log(`Winner is ${this.winner.name}`);
        }
        else{
            console.log('Call Three secuence check Method');
            // this.threeCardSecuenceCheck(game);
            // const g = new Game();
            // g.start();
            // return 1;
        }
    
    }
    threeCardSecuenceCheck(game){
        for(let i=0; i<game.length; i++){
            let currentPlayer = game[i];
            let currentCardList = currentPlayer.showAllCards();
            let sortedCard = _.sortBy(currentCardList);
            let flag = 1;
            let combineValue = 0;
            for(let j=0; j<sortedCard.length-1; j++){
                let diff = sortedCard[j+1] - sortedCard[j]
                if(diff != 1){
                    //some breaking condition
                    flag =0;
                    break;
                }
                combineValue += sortedCard[j];
            }
            if(flag){
                combineValue += sortedCard[currentCardList.length];
                this.winner.name = currentPlayer.getName();
                this.winner.combineValue = combineValue;     
            }

        }
        if(!_.isEmpty(this.winner)){

            console.log(`Winner is ${this.winner.name}`);
        }
        else{
            console.log('Call two trail check Method');
            // this.threeCardSecuenceCheck(game);
            // const g = new Game();
            // g.start();
            // return 1;
        }

    }
    twoCardTrailCheck(game){
        for(let i=0; i<game.length; i++){
            let currentPlayer = game[i];
            let currentCardList = currentPlayer.showAllCards();
            // console.log(currentPlayer.name);
            // console.log(currentPlayer.getName());
            // console.log(currentCardList);
            // console.log();
            let firstCard = currentCardList[0].getValue();
            let secondCard = currentCardList[1].getValue();
            let thirdCard = currentCardList[2].getValue();
            if((firstCard == secondCard)||(firstCard == thirdCard)||(secondCard == thirdCard)){
                let combineValue = firstCard+secondCard+thirdCard;
                if( Object.keys(this.winner).length == 0 || this.winner.value < value){
                    console.log();
                    this.winner.name = currentPlayer.getName();
                    this.winner.combineValue = combineValue;
                }      
            }
        }
        if(!_.isEmpty(this.winner)){

            console.log(`Winner is ${this.winner.name}`);
        }
        else{
            console.log('Call Three secuence check Method');
            // this.threeCardSecuenceCheck(game);
            // const g = new Game();
            // g.start();
            // return 1;
        }
    }
    
    highestTopCardCheck(player){

    }
}

// const game = new Game();
// game.start();
module.exports = {Rule};
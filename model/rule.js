var _ = require('lodash');

const {Player} = require('./player');
const {Card} = require('./card');
const {Game} = require('./game');
class Rule{
    constructor(){
        this.winner = {};
    }
    // two player with same value check perform
    // check for empty deck;
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
                if( Object.keys(this.winner).length == 0 || this.winner.value < combineValue){
                    console.log();
                    this.winner.name = currentPlayer.getName();
                    this.winner.value = combineValue;
                }      
            }
        }
        if(!_.isEmpty(this.winner)){

            console.log(`Winner is ${this.winner.name} by threeCardTrailCheck rule`);
        }
        else{
            // console.log('Call Three secuence check Method');
            this.threeCardSecuenceCheck(game);
            // const g = new Game();
            // g.start();
            // return 1;
        }
    
    }
    threeCardSecuenceCheck(game){
        for(let i=0; i<game.length; i++){
            let currentPlayer = game[i];
            let currentCardList = currentPlayer.showAllCards();
            let sortedCard = _.sortBy(currentCardList, "value");
            let flag = 1;
            let combineValue = 0;
            for(let j=0; j<sortedCard.length-1; j++){
                let diff = sortedCard[j+1].getValue() - sortedCard[j].getValue();
                if(diff != 1){
                    //some breaking condition
                    flag =0;
                    break;
                }
                combineValue += sortedCard[j].getValue();
            }
            if(flag){ 
                combineValue += sortedCard[currentCardList.length - 1].getValue();
                if(Object.keys(this.winner).length == 0 || this.winner.value < combineValue){
                    this.winner.name = currentPlayer.getName();
                    this.winner.value = combineValue;
                }        
            }

        }
        if(!_.isEmpty(this.winner)){

            console.log(`Winner is ${this.winner.name} by threeCardSecuenceCheck rule`);
        }
        else{
            console.log('Call two trail check Method');
            this.twoCardTrailCheck(game);
            // const g = new Game();
            // g.start();
            // return 1;
        }

    }
    twoCardTrailCheck(game){
        for(let i=0; i<game.length; i++){
            let currentPlayer = game[i];
            let currentCardList = currentPlayer.showAllCards();
            let firstCard = currentCardList[0].getValue();
            let secondCard = currentCardList[1].getValue();
            let thirdCard = currentCardList[2].getValue();
            if((firstCard == secondCard)||(firstCard == thirdCard)||(secondCard == thirdCard)){
                let combineValue = 0;
                if((firstCard == secondCard)){
                    combineValue = 2 * firstCard;
                }
                else{
                    combineValue = 2 * thirdCard; 
                }
                if( Object.keys(this.winner).length == 0 || this.winner.value < combineValue){
                    console.log();
                    this.winner.name = currentPlayer.getName();
                    this.winner.value = combineValue;
                }      
            }
        }
        if(!_.isEmpty(this.winner)){

            console.log(`Winner is ${this.winner.name} by twoCardTrailCheck rule`);
        }
        else{
            console.log('Call Three secuence check Method');
            this.highestTopCardCheck(game);
            // const g = new Game();
            // g.start();
            // return 1;
        }
    }
    
    highestTopCardCheck(game){
        for(let i=0; i<game.length; i++){
            let currentPlayer = game[i];
            let currentCardList = currentPlayer.showAllCards();
            let currentCardValue =  currentCardList[currentCardList.length-1].getValue();
            if( Object.keys(this.winner).length == 0 || this.winner.value < currentCardValue){
                console.log();
                this.winner.name = currentPlayer.getName();
                this.winner.value = currentCardValue;
            }  

        }
        if(!_.isEmpty(this.winner)){

            console.log(`Winner is ${this.winner.name}  by highestTopCardCheck rule`);
        }
        else{
            console.log('Call deal method');
            // this.highestTopCardCheck(player);
            // const g = new Game();
            // g.start();
            // return 1;
        } 
    }
}

// const game = new Game();
// game.start();
module.exports = {Rule};
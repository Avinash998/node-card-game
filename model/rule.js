var _ = require('lodash');

class Rule{
    constructor(){
        this.winner = {}; // Store temporary winner with value
    }

    // multiple player with same value check perform to all methods

    /* Method to check trail of three cards with highest value.
         Return single winner or( list of players or all player) and call next rule. */
    threeCardTrailCheck(game){
        let winnerPlayerList = [];
        for(let i=0; i<game.length; i++){
            let currentPlayer = game[i];
            let currentCardList = currentPlayer.showAllCards();
            let firstCard = currentCardList[0].getValue();
            let secondCard = currentCardList[1].getValue();
            let thirdCard = currentCardList[2].getValue();
            if((firstCard == secondCard)&&(firstCard == thirdCard)){
                
                let combineValue = firstCard+secondCard+thirdCard;
                winnerPlayerList = this.getWinnerList(winnerPlayerList,combineValue,currentPlayer);    
            }
        }
        this.winner = {};
        if(winnerPlayerList.length == 0){
            winnerPlayerList =  this.threeCardSecuenceCheck(game);
        }
        else if(winnerPlayerList.length == 1){
            console.log(`Winner is ${winnerPlayerList[0].getName()} by threeCardTrailCheck rule`);
        }
        else{
            winnerPlayerList =  this.threeCardSecuenceCheck(winnerPlayerList);
        }
        return winnerPlayerList;
    
    }

    /* Method to check sequence of three cards with highest value.
         Return single winner or( list of players or all player) and call next rule. */
    threeCardSecuenceCheck(game){
        let winnerPlayerList = [];
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

                winnerPlayerList = this.getWinnerList(winnerPlayerList,combineValue,currentPlayer); 
            }

        }
        this.winner = {};
        if(winnerPlayerList.length == 0){
            winnerPlayerList =  this.twoCardTrailCheck(game);
        }
        else if(winnerPlayerList.length == 1){
            console.log(`Winner is ${winnerPlayerList[0].getName()} by threeCardSecuenceCheck rule`);
        }
        else{
            winnerPlayerList =  this.twoCardTrailCheck(winnerPlayerList);
        }
        return winnerPlayerList;

    }

    /* Method to check trail of two cards with highest value.
         Return single winner or( list of players or all player) and call next rule. */
    twoCardTrailCheck(game){
        let winnerPlayerList = [];
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
                winnerPlayerList = this.getWinnerList(winnerPlayerList,combineValue,currentPlayer);        
            }
        }
        this.winner = {};
        if(winnerPlayerList.length == 0){
            winnerPlayerList =  this.highestTopCardCheck(game);
        }
        else if(winnerPlayerList.length == 1){
            console.log(`Winner is ${winnerPlayerList[0].getName()} by twoCardTrailCheck rule`);
        }
        else{
            winnerPlayerList =  this.highestTopCardCheck(winnerPlayerList);
        }
        return winnerPlayerList;
    }
    
    /* Method to check last hand card with highest value.
         Return single winner or list of players or all player. */
    highestTopCardCheck(game){
        let winnerPlayerList = [];
        for(let i=0; i<game.length; i++){
            let currentPlayer = game[i];
            let currentCardList = currentPlayer.showAllCards();
            let combineValue =  currentCardList[currentCardList.length-1].getValue();
            winnerPlayerList = this.getWinnerList(winnerPlayerList,combineValue,currentPlayer); 

        }
        this.winner = {};
        if(winnerPlayerList.length == 1){
            console.log(`Winner is ${winnerPlayerList[0].getName()} by highestTopCardCheck rule`);
        }
        return winnerPlayerList;
    }

    /* Method to check the winnerlist and return winnerlist */
    getWinnerList(winnerPlayerList,combineValue,currentPlayer){
        if(Object.keys(this.winner).length == 0){
            winnerPlayerList.push(currentPlayer);
            this.winner.name = currentPlayer.getName();
            this.winner.value = combineValue;
        }
        else if(this.winner.value < combineValue){
            winnerPlayerList = [];
            winnerPlayerList.push(currentPlayer);
            this.winner.name = currentPlayer.getName();
            this.winner.value = combineValue;
        }
        else if(this.winner.value == combineValue){
            winnerPlayerList.push(currentPlayer);
        } 
        return winnerPlayerList;
    }
    
}

// const game = new Game();
// game.start();
module.exports = {Rule};
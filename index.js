
const {Game} = require('./model/game');
const {Player} = require('./model/player');
const {Suit} = require('./model/suit');
const {Deck} = require('./model/deck');

console.log("Lets Play Card Games.");
console.log("First Lets Create new Game");

const game = new Game();

console.log("Game must have cards, So lets create cards and suit and add to the game.");
const heart = new Suit("heart", "red");
const diamond = new Suit("diamond", "red");
const spade = new Suit("spade", "black");
const club = new Suit("club", "black");

console.log("Where's the Deck? Create Deck and add all the cards to it.");
const deck = new Deck();
deck.addSuit(heart.getsuit());
deck.addSuit(diamond.getsuit());
deck.addSuit(spade.getsuit());
deck.addSuit(club.getsuit());

console.log("--------------- Order of Cards in the Deck (Before Suffle)-------------------");
deck.getlist().forEach(name => {
    console.log(name.getName());
});

console.log("We need to suffle the deck.");
console.log("---------------Order of Cards in the Deck (After Suffle)-------------------");
deck.suffle();
deck.getlist().forEach(name => {
    console.log(name.getName());
});

console.log("Seriously man, we are missing out somethig. Where the hell all the playres.");
console.log("Ohh... We need to add playres to play the game.");

const avinash = new Player("Aviansh");
const rahul = new Player("Rahul");
const anand = new Player("Anand");
const aman = new Player("Aman");

game.addPlayer(avinash);
game.addPlayer(rahul);
game.addPlayer(anand);
game.addPlayer(aman);

console.log("Everything seems OK..... So shall we start the game.");
console.log("Lets deal 3 times.");
game.deal(deck);
game.deal(deck);
game.deal(deck);

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
console.log("------------------Anand card-----------------------");
anand.showAllCards().forEach(name => {
    console.log(name.getName());
});
console.log("------------------Aman card-----------------------");
aman.showAllCards().forEach(name => {
    console.log(name.getName());
});

console.log("Time for.");
console.log("------------------Rules Check---------------------");
game.start();
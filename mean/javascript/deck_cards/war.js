//Card class
function Card(suit, rank){
  this.suit = suit
  this.rank = rank
}

//Deck class
function Deck(){
  var deck = [];

  var suits = ["hearts", "clubs", "diamonds", "spades"]
  for (var rank = 1; rank <= 13; rank++) {
    for (var suit = 0; suit < suits.length; suit++){
      deck.push(new Card(suits[suit], rank))
    }
  }

  this.deal = function(){
    if (deck){
      return deck.pop()
    }
  }
  this.shuffle = function(){
    for (var i = 0; i < deck.length; i++) {
      var ran_index = Math.floor(Math.random() * deck.length)
      var temp = deck[i]
      deck[i] = deck[ran_index]
      deck[ran_index] = temp

    }
  }
}

//Player class
function Player(name){
  this.name = name;
  this.hand = [];
  this.split = function(){
    for (var i = 0; i < 26; i++) {
      this.hand.push(deck.deal());
    }
  }
}

//Play functions
function Play(player1, player2){
  if (player1.hand.length > 0 && player2.hand.length > 0){
    var p1card = player1.hand.pop();
    var p2card = player2.hand.pop();
    var cards = [p1card, p2card];

    if(p1card.rank > p2card.rank){
      player1.hand = cards.concat(player1.hand);
    } else if (p1card.rank < p2card.rank){
      player2.hand = cards.concat(player2.hand);
    } else {
      if (player1.hand.length > 3 && player2.hand.length > 3){
        PlayHelper(player1, player2, cards);
      } else {
          if (player1.hand.length > player2.hand.length){
            player1.hand = cards.concat(player1.hand);
            player1.hand = player2.hand.concat(player1.hand);
            player2.hand = [];
          } else {
            player2.hand = cards.concat(player2.hand);
            player2.hand = player1.hand.concat(player2.hand);
            player1.hand = [];
          } 
      }
    }
  }
}

function PlayHelper(player1, player2, cards){
  if (player1.hand.length > 0 && player2.hand.length > 0){

    var p1card;
    var p2card;

    for (i = 0; i < 4; i++){
      p1card = player1.hand.pop();
      cards.push(p1card);
      p2card = player2.hand.pop(); 
      cards.push(p2card); 
    }

    if (p1card.rank > p2card.rank){
      player1.hand = cards.concat(player1.hand);
    } 
    else if (p1card.rank < p2card.rank){
      player2.hand = cards.concat(player2.hand);
    } 
    else {
      if (player1.hand.length > 3 && player2.hand.length > 3){
        PlayHelper(player1, player2, cards);
      }
      else {
        if (player1.hand.length > player2.hand.length){
          player1.hand = cards.concat(player1.hand);
          player1.hand = player2.hand.concat(player1.hand);
          player2.hand = [];
         } else {
          player2.hand = cards.concat(player2.hand);
          player2.hand = player1.hand.concat(player2.hand);
          player1.hand = [];
        } 
      }
    } 
  }
}

//Play Blackjack
var deck = new Deck();
deck.shuffle();

var player1 = new Player("Vineeth");
var player2 = new Player("Abshir");
player1.split(deck);
player2.split(deck);


while(Math.abs(player1.hand.length - player2.hand.length) != 52){
  Play(player1, player2);
  // console.log("******************");
  // console.log(player1.hand);
  // console.log(player2.hand);
  // console.log("******************");
};

console.log("Player 1 has " + player1.hand.length);
console.log("Player 2 has " + player2.hand.length);

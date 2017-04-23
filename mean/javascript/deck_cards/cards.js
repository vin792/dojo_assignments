//Card Class
function Card(suit, rank){
	this.suit = suit;
	this.rank = rank;
	this.name = `${rank} of ${suit}`;
}

//Deck Class
function Deck(){
	var deck = []
	var suits = ["hearts", "clubs", "diamonds", "spades"]

	for (var rank = 1; rank <=13; rank++){
		for (var suit=0; suit < suits.length; suit++){
			deck.push(new Card(suits[suit], rank));
		};
	};

	this.deal = function(){
		if(deck){
			return deck.pop();
		}	
	}

	this.shuffle = function(){
		for (var i = 0; i < deck.length; i++){
			var rand_index = Math.floor(Math.random() * deck.length)
			var temp = deck[i]
			deck[i] = deck[rand_index]
			deck[rand_index] = temp
		}
	}
}

//Person Class
//Player Class
function PlayerConstructor(name){
	this.name = name;
	this.hand = [];
}

PlayerConstructor.prototype.add_card = function(deck_obj){
	new_card = deck_obj.deal();
	this.hand[new_card[0]] = new_card;
	return this;
}


PlayerConstructor.prototype.remove_all_cards = function(){
	return this.hand = [];
}

//Black jack
var my_deck = new Deck();
var dealer = new PlayerConstructor("dealer");
var player = new PlayerConstructor("player");


my_deck.shuffle();






 

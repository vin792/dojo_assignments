//Deck Class
function DeckConstructor(){	

	//Private variables
	var suits = {hearts: "\u1F0A", diamonds: "\u1F0B", spades: "\u1F0C", clubs: "\u1F0B"}
	var cards = { two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", ten: "A", jack: "B", queen: "D", king: "E", ace: "1"}
	var counter = 0

	//Populate deck on object instantiation
	this.deck = [];

	for (i in suits){
		for (j in cards){
			this.deck.push([j + "of" + i, suits[i]+cards[j]]);
		};
	};
	
	//Reset deck method
	this.reset = function(){
		//Clear deck
		this.deck = [];
		//Repopulate the deck
		for (i in suits){
			for (j in cards){
				this.deck.push([j + "of" + i, suits[i]+cards[j]]);
			}
		}
		return this
	};
}

DeckConstructor.prototype.shuffle = function(){
	var m = this.deck.length, t, i;
	  // While there remain elements to shuffle…
	  while (m) {
	    // Pick a remaining element…
	    i = Math.floor(Math.random() * m--);
	    // And swap it with the current element.
	    t = this.deck[m];
	    this.deck[m] = this.deck[i];
	    this.deck[i] = t;
	  }
	  return this;
}

DeckConstructor.prototype.deal = function(){
	//Call shuffle method
	this.shuffle();
	//Take last card in deck
	dealt_card = this.deck[this.deck.length - 1]
	//Remove dealt card from deck
	this.deck.pop();
	//Return dealt card
	return dealt_card;
}


//Player Class
function PlayerConstructor(name){
	this.name = name;
	this.hand = {};
}

PlayerConstructor.prototype.add_card = function(deck_obj){
	new_card = deck_obj.deal();
	this.hand[new_card[0]] = new_card;
	return this;
}

PlayerConstructor.prototype.remove_card = function(card_name){
	delete this.hand[card_name];
	return this;
}

PlayerConstructor.prototype.remove_all_cards = function(){
	for (i in this.hand){
		delete this.hand[i];
	}
	return this;
}


//Blackjack
function Blackjack(name){
	this.dealer = new PlayerConstructor("dealer");
	this.player = new PlayerConstructor(name);
}

Blackjack.prototype.hit = function(){
	
}






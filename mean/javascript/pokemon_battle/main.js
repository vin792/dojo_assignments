var game = {
  players: [],
  addPlayer: function(name){
  	newplayer = playerConstructor(name);
  	game.players.push(newplayer);
  }
};

function playerConstructor(name){
  player = {};
  player.name = name;
    player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};
//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

struct Card {
    let value: String
    let suit: String
    let numerical_value: Int
    
    func show(){
        print(value, "of", suit, ": value", numerical_value)
    }
}

class Deck {
    var cards = [Card]()
    
    init() {
        let suits: [String] = ["Club", "Spade", "Heart", "Diamond"]
        let values: [String] = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        
        for suit in suits {
            var num_value: Int = 1
            for value in values {
                let newCard = Card(value: value, suit: suit, numerical_value: num_value)
                self.cards.append(newCard)
                num_value += 1
            }
        }
    }
    
    func deal() -> Card {
        return self.cards.remove(at: 0)
    }
    
    func reset() {
        self.cards.removeAll()
        
        let suits: [String] = ["Club", "Spade", "Heart", "Diamond"]
        let values: [String] = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        
        for suit in suits {
            var num_value: Int = 1
            for value in values {
                let newCard = Card(value: value, suit: suit, numerical_value: num_value)
                self.cards.append(newCard)
                num_value += 1
            }
        }
    }
    
    func shuffle() {
        for _ in 0...100 {
            let index1: Int = Int(arc4random_uniform(UInt32(self.cards.count)))
            let index2: Int = Int(arc4random_uniform(UInt32(self.cards.count)))
            
            let temp = self.cards[index1]
            self.cards[index1] = self.cards[index2]
            self.cards[index2] = temp
        }
    }
}

class Player {
    var name: String
    var hand = [Card]()
    
    init(name: String) {
        self.name = name
    }
    
    func drawCard(deck: Deck) {
        deck.shuffle()
        hand.append(deck.deal())
    }
    
    func removeCard(card: Card) -> Bool {
        for i in 0..<self.hand.count {
            if (self.hand[i].suit == card.suit && self.hand[i].numerical_value == card.numerical_value) {
                self.hand.remove(at: i)
                return true
            }
        }
        
        return false
    }
}

let myDeck = Deck()
let myPlayer = Player(name: "Test1")

//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

print("is this working")

class Animal {
    var name: String
    var health: Int = 100
    init(name: String) {
        self.name = name
    }
    
    func displayHealth() {
        print("\(self.name) has a health of \(self.health)")
    }
}

class Cat: Animal {
    init(catName: String) {
        super.init(name: catName)
        self.health = 150
    }
    
    func growl() {
        print("Rawr!")
    }
    
    func run() {
        print("Running")
    }
}

class Lion: Cat {
    init(lionName: String) {
        super.init(catName: lionName)
        self.health = 200
    }
    
    override func growl() {
        print("ROAR!!!! I am the king of the jungle")
    }
}

class Cheetah: Cat {
    init(cheetahName: String) {
        super.init(catName: cheetahName)
    }
    
    override func run() {
        print("Running Fast")
        if (self.health >= 50) {
            self.health -= 50
        } else {
            print("Not enough health to run")
        }
    }
    
    func sleep() {
        if(self.health <= 150) {
            self.health += 50
        } else {
            self.health = 200
        }
    }
}

var newCheetah: Cheetah = Cheetah(cheetahName: "testCheetah")
var newLion: Lion = Lion(lionName: "testLion")
newCheetah.run()
newCheetah.run()
newCheetah.run()
newCheetah.run()
newCheetah.displayHealth()
newLion.run()
newLion.run()
newLion.run()
newLion.growl()



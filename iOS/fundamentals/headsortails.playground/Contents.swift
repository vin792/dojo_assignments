//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

func tossCoin() -> String {
    print("tossing a coin")
    let myArr: [String] = ["Heads","Tails"]
    
    let index = Int(arc4random_uniform(2))
    print (myArr[index])
    
    return myArr[index]
}

func tossMultipleCoins(timesRun: Int) -> Double {
    
    var headsCount: Double = 0
    var tailsCount: Double = 0
   
    for _ in 1...timesRun {
        let tossResult: String = tossCoin()
        if tossResult == "Tails" {
            tailsCount += 1
        } else {
            headsCount += 1
        }
    }
    
    return headsCount / tailsCount
}

print(tossMultipleCoins(timesRun: 10))
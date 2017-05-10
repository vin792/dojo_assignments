//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

var myNumbers = [Int]()

for i in 1...255 {
    myNumbers.append(i)
}

let rand1 = Int(arc4random_uniform(254))
let rand2 = Int(arc4random_uniform(254))

let temp = myNumbers[rand1]
myNumbers[rand1] = myNumbers[rand2]
myNumbers[rand2] = temp

for i in 1...100 {
    let index1 = Int(arc4random_uniform(254))
    let index2 = Int(arc4random_uniform(254))
    
    let temp = myNumbers[index1]
    myNumbers[index1] = myNumbers[index2]
    myNumbers[index2] = temp
}

print(myNumbers)

for number in myNumbers {
    if (number == 42) {
        myNumbers.remove(at: number)
        print("We found the answer to the ultimate question of life, the universe, and everything at index \(number)")
    }
}

let length = myNumbers.count

for i in 1...100 {
    var randNumberOne = Int(arc4random_uniform(UInt32(length)))
    var randNumberTwo = Int(arc4random_uniform(UInt32(length)))
    
    if randNumberOne != randNumberTwo {
        swap(&myNumbers[randNumberOne], &myNumbers[randNumberTwo])
    }
    
}
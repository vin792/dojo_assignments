//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

for i in 1...255 {
    print(i)
}

print("\n")

for i in 1...100 {
    if (i % 3 == 0 || i % 5 == 0) {
        if !(i % 3 == 0 && i % 5 == 0){
            print(i)
        }
    }
}

for i in 1...100 {
    if(i % 3 == 0 && i % 5 == 0) {
        print("\(i) FizzBuzz")
    } else if (i % 5 == 0) {
        print("\(i) Buzz")
    } else if (i % 3 == 0) {
        print("\(i) Fizz")
    }
}

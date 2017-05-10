//
//  ViewController.swift
//  tictactoe
//
//  Created by Vineeth Raghunath on 5/9/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var squareOne: UIButton!
    @IBOutlet weak var squareTwo: UIButton!
    @IBOutlet weak var squareThree: UIButton!
    @IBOutlet weak var squareFour: UIButton!
    @IBOutlet weak var squareFive: UIButton!
    @IBOutlet weak var squareSix: UIButton!
    @IBOutlet weak var squareSeven: UIButton!
    @IBOutlet weak var squareEight: UIButton!
    @IBOutlet weak var squareNine: UIButton!
    @IBOutlet weak var winnerLabel: UILabel!
    
    
    @IBAction func squarePressed(_ sender: UIButton) {
        if checkPress(pressedSquare: sender.tag) {
            if (turn == 1) {
                sender.backgroundColor = UIColor.blue
                pressed.append(sender.tag)
                player1.append(sender.tag)
                if checkGame(playerArray: player1) {
                    winnerLabel.text = "Player 1 wins!"
                    winnerLabel.isHidden = false
                }
                turn = 2
            } else {
                sender.backgroundColor = UIColor.red
                pressed.append(sender.tag)
                player2.append(sender.tag)
                if checkGame(playerArray: player2) {
                    winnerLabel.text = "Player 2 wins!"
                    winnerLabel.isHidden = false
                }
                turn = 1
            }
        }
    }

    @IBAction func resetBtnPressed(_ sender: UIButton) {
        winnerLabel.isHidden = true
        pressed.removeAll()
        player1.removeAll()
        player2.removeAll()
        squareOne.backgroundColor = UIColor.lightGray
        squareTwo.backgroundColor = UIColor.lightGray
        squareThree.backgroundColor = UIColor.lightGray
        squareFour.backgroundColor = UIColor.lightGray
        squareFive.backgroundColor = UIColor.lightGray
        squareSix.backgroundColor = UIColor.lightGray
        squareSeven.backgroundColor = UIColor.lightGray
        squareEight.backgroundColor = UIColor.lightGray
        squareNine.backgroundColor = UIColor.lightGray
    }
    
    var pressed: Array<Int> = []
    var turn: Int = 1
    var player1: Array<Int> = []
    var player2: Array<Int> = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func checkGame(playerArray: Array<Int>) -> Bool {
        if (playerArray.contains(1) && playerArray.contains(2) && playerArray.contains(3)){
            return true
        }
        if (playerArray.contains(4) && playerArray.contains(5) && playerArray.contains(6)){
            return true
        }
        if (playerArray.contains(7) && playerArray.contains(8) && playerArray.contains(9)){
            return true
        }
        if (playerArray.contains(1) && playerArray.contains(4) && playerArray.contains(7)){
            return true
        }
        if (playerArray.contains(2) && playerArray.contains(5) && playerArray.contains(8)){
            return true
        }
        if (playerArray.contains(3) && playerArray.contains(6) && playerArray.contains(9)){
            return true
        }
        if (playerArray.contains(1) && playerArray.contains(5) && playerArray.contains(9)){
            return true
        }
        if (playerArray.contains(3) && playerArray.contains(5) && playerArray.contains(7)){
            return true
        }
        
        return false
    }
    
    func checkPress(pressedSquare: Int) -> Bool {
        if pressed.contains(pressedSquare){
            return false
        } else {
            return true
        }
    }

}


//
//  ViewController.swift
//  ninjagold
//
//  Created by Vineeth Raghunath on 5/9/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var scoreLabel: UILabel!
    
    @IBOutlet weak var farmLabel: UILabel!
    @IBOutlet weak var caveLabel: UILabel!
    @IBOutlet weak var houseLabel: UILabel!
    @IBOutlet weak var casinoLabel: UILabel!
    
    @IBAction func buildingBtnPressed(_ sender: UIButton) {
        if (sender.tag == 1) {
            gold = Int(arc4random_uniform(11)) + 10
            score = score + gold
            farmLabel.text = "You earned \(gold)"
            farmLabel.isHidden = false
            caveLabel.isHidden = true
            houseLabel.isHidden = true
            casinoLabel.isHidden = true
            scoreLabel.text = "Score: \(score)"
        }
        
        if (sender.tag == 2) {
            gold = Int(arc4random_uniform(6)) + 5
            score = score + gold
            caveLabel.text = "You earned \(gold)"
            farmLabel.isHidden = true
            caveLabel.isHidden = false
            houseLabel.isHidden = true
            casinoLabel.isHidden = true
            scoreLabel.text = "Score: \(score)"
        }
        
        if (sender.tag == 3) {
            gold = Int(arc4random_uniform(3)) + 2
            score = score + gold
            houseLabel.text = "You earned \(gold)"
            farmLabel.isHidden = true
            caveLabel.isHidden = true
            houseLabel.isHidden = false
            casinoLabel.isHidden = true
            scoreLabel.text = "Score: \(score)"
        }
        
        if (sender.tag == 4) {
            gold = Int(arc4random_uniform(51))
            let negativeOrPositive: Int = Int(arc4random_uniform(2))
            if (negativeOrPositive == 0) {
                casinoLabel.text = "You earned \(gold)"
            } else {
                casinoLabel.text = "You lost \(gold)"
                gold *= -1
            }
            score = score + gold
            farmLabel.isHidden = true
            caveLabel.isHidden = true
            houseLabel.isHidden = true
            casinoLabel.isHidden = false
            scoreLabel.text = "Score: \(score)"
        }
    }
    
    @IBAction func resetBtnPressed(_ sender: UIButton) {
        score = 0
        scoreLabel.text = "Score: \(score)"
        farmLabel.isHidden = true
        caveLabel.isHidden = true
        houseLabel.isHidden = true
        casinoLabel.isHidden = true
    }
    
    var score: Int = 0
    var gold: Int = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}


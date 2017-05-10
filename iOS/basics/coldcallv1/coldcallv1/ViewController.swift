//
//  ViewController.swift
//  coldcallv1
//
//  Created by Vineeth Raghunath on 5/9/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var numberLabel: UILabel!
    
    @IBAction func coldCallBtnPressed(_ sender: UIButton) {
        currentIndex = Int(arc4random_uniform(5))
        randomNumber = Int(arc4random_uniform(5)) + 1
        updateName()
        updateNum()
        numberLabel.isHidden = false
    }
    
    let names: Array<String> = ["First", "Second", "Third", "Fourth", "Fifth"]
    
    var currentIndex: Int = 0
    var randomNumber: Int = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func updateName() {
        nameLabel.text = names[currentIndex]
    }

    func updateNum() {
        numberLabel.text = String(randomNumber)
        if (randomNumber < 3) {
            numberLabel.textColor = UIColor.red
        } else if (randomNumber < 5 && randomNumber > 2) {
            numberLabel.textColor = UIColor.orange
        } else {
            numberLabel.textColor = UIColor.green
        }
    }

}


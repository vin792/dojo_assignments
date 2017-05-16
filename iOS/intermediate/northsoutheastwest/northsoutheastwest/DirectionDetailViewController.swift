//
//  DirectionDetailViewController.swift
//  northsoutheastwest
//
//  Created by Vineeth Raghunath on 5/15/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class DirectionDetailViewController: UIViewController {

    var btnTitleLabel: String?
    
    @IBOutlet weak var directionBtnLabel: UIButton!
    
    @IBAction func directnBtnPressed(_ sender: UIButton) {
        self.performSegue(withIdentifier: "unwindtoHome", sender: self)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        directionBtnLabel.setTitle(btnTitleLabel, for: .normal)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

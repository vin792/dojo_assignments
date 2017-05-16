//
//  AddLibsViewController.swift
//  madlibs
//
//  Created by Vineeth Raghunath on 5/15/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class AddLibsViewController: UIViewController {

    var viewController: ViewController?
    
    @IBOutlet weak var adjectiveLabel: UITextField!
    @IBOutlet weak var verbLabel: UITextField!
    @IBOutlet weak var verb2Label: UITextField!
    @IBOutlet weak var nounLabel: UITextField!
    
    @IBAction func submitBtnPressed(_ sender: UIButton) {
        if let adjective = adjectiveLabel.text, let verb = verbLabel.text, let verb2 = verb2Label.text, let noun = nounLabel.text {
            viewController?.noun = noun
            viewController?.adjective = adjective
            viewController?.verb = verb
            viewController?.verb2 = verb2
        }
        performSegue(withIdentifier: "unwindToHome", sender: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

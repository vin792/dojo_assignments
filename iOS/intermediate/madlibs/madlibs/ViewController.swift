//
//  ViewController.swift
//  madlibs
//
//  Created by Vineeth Raghunath on 5/15/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    var noun: String?
    var verb: String?
    var verb2: String?
    var adjective: String?
    
    @IBAction func unwindToHome(segue: UIStoryboardSegue) {
        if let n = noun, let adj = adjective, let v1 = verb, let v2 = verb2 {
            madlibLabel.text = "We are having a perfectly \(adj) time now. Later we will \(v1) and \(v2) in the \(n)."
        }
    }
    
    @IBAction func editBtnPressed(_ sender: Any) {
        performSegue(withIdentifier: "addLibsSegue", sender: nil)
    }
    
    @IBOutlet weak var madlibLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "addLibsSegue" {
            let addLibsViewController = segue.destination as? AddLibsViewController
            addLibsViewController?.viewController = self
        }
    }

}


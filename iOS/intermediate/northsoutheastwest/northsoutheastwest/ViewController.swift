//
//  ViewController.swift
//  northsoutheastwest
//
//  Created by Vineeth Raghunath on 5/15/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBAction func unwindtoHome(segue: UIStoryboardSegue){}
    
    @IBAction func directionBtnPressed(_ sender: UIButton) {
        if let _ = sender.titleLabel?.text {
            performSegue(withIdentifier: "DirectionDetailSegue", sender: sender)
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "DirectionDetailSegue" {
            let btn = sender as! UIButton
            let detailDirectionController = segue.destination as? DirectionDetailViewController
            detailDirectionController?.btnTitleLabel = btn.titleLabel?.text
        }
    }


}


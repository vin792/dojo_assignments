//
//  ViewController.swift
//  binarycounter
//
//  Created by Vineeth Raghunath on 5/16/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class BinaryCounterViewController: UIViewController {

    var total: Int = 0
    
    @IBOutlet weak var tableView: UITableView!
    @IBOutlet weak var totalLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.delegate = self
        tableView.dataSource = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

extension BinaryCounterViewController: UITableViewDataSource, UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 16
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomCell
        let power = pow(10, indexPath.row)
        cell.number = Int(NSDecimalNumber(decimal: power))
        cell.delegate = self
        cell.powerLabel.text = "\(cell.number!)"
        return cell
    }
    
}

extension BinaryCounterViewController: CustomCellDelegate {
    func buttonPressed(withValue value: Int) {
        self.total += value
        totalLabel.text = "Total: \(total)"
    }
}


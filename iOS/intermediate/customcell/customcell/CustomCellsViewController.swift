//
//  ViewController.swift
//  customcell
//
//  Created by Vineeth Raghunath on 5/16/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class CustomCellsViewController: UITableViewController {

    var nums = [1, 90, 32, 23, 9, 12]
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell") as! CustomCell
        cell.rightLabel.text = "\(nums[indexPath.row])"
        if nums[indexPath.row] > 24 {
            cell.leftBtn.backgroundColor = UIColor.green
        } else {
            cell.leftBtn.backgroundColor = UIColor.red
        }
        // return cell so that Table View knows what to draw in each row
        return cell
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return nums.count
    }
}


//
//  CustomCell.swift
//  binarycounter
//
//  Created by Vineeth Raghunath on 5/16/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import Foundation
import UIKit

protocol CustomCellDelegate: class {
    func buttonPressed(withValue value: Int)
}

class CustomCell: UITableViewCell {
    
    var number: Int?
    var delegate: CustomCellDelegate?
    
    @IBOutlet weak var powerLabel: UILabel!
    
    @IBAction func plusBtnPressed(_ sender: UIButton) {
        let val: Int
        val = self.number!
        delegate?.buttonPressed(withValue: val)
    }
    
    @IBAction func minusBtnPressed(_ sender: UIButton) {
        let val: Int
        val = -self.number!
        delegate?.buttonPressed(withValue: val)
    }
    
}

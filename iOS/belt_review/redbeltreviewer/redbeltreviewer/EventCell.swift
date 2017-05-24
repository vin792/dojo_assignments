//
//  EventCell.swift
//  redbeltreviewer
//
//  Created by Vineeth Raghunath on 5/23/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import Foundation
import UIKit

protocol EventCellDelegate {
    func complete(btnPressed: UIButton, eventRow: IndexPath)
    func edit(eventRow: IndexPath)
}

class EventCell: UITableViewCell {
    var delegate: EventCellDelegate?
    var row: IndexPath?
    
    @IBOutlet weak var eventDetailLabel: UILabel!
    @IBOutlet weak var completeBtnLabel: UIButton!
    
    @IBAction func completeBtnPressed(_ sender: UIButton) {
        delegate?.complete(btnPressed: sender, eventRow: row!)
    }
    
    @IBAction func editBtnPressed(_ sender: UIButton) {
        delegate?.edit(eventRow: row!)
    }
    
}

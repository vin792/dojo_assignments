//
//  AddEditEventDelegate.swift
//  redbeltreviewer
//
//  Created by Vineeth Raghunath on 5/23/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import Foundation

protocol AddEditEventDelegate {
    func addItem(eventTitle: String, eventInfo: String, eventDate: Date)
    func editItem(eventTitle: String, eventInfo: String, eventDate: Date, indexPath: IndexPath)
}

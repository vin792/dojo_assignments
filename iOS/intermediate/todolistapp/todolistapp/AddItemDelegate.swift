//
//  AddItemDelegate.swift
//  todolistapp
//
//  Created by Vineeth Raghunath on 5/17/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import Foundation
import UIKit

protocol AddItemDelegate: class {
    func addItemViewController(_ controller: AddItemViewController, didAddItem title: String, itemDetail detail: String, itemDate date: Date)
}

//
//  AddItemTableViewControllerDelegate.swift
//  bucketList
//
//  Created by Vineeth Raghunath on 5/15/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

protocol AddItemTableViewControllerDelegate: class {
    func addItemViewController(_ controller: addItemTableViewController, didFinishAddingItem item: String, at indexPath: NSIndexPath?)
    func addItemViewController(_ controller: addItemTableViewController, didPressCancelButton button: UIBarButtonItem)
}

//
//  AddItemViewController.swift
//  todolistapp
//
//  Created by Vineeth Raghunath on 5/17/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class AddItemViewController: UIViewController {

    var itemDate: Date?
    var itemName: String?
    var itemDetail: String?
    weak var delegate: AddItemDelegate?
    
    
    @IBOutlet weak var itemNameTextField: UITextField!
    @IBOutlet weak var itemDetailTextField: UITextField!
    @IBOutlet weak var datePicker: UIDatePicker!
    
    @IBAction func addItemBtnPressed(_ sender: Any) {
        itemName = itemNameTextField.text
        itemDetail = itemDetailTextField.text
        itemDate = datePicker.date
        
        if itemName! != "", itemDetail! != "" {
            delegate?.addItemViewController(self, didAddItem: itemName!, itemDetail: itemDetail!, itemDate: itemDate!)
        } else {
            let alertController = UIAlertController(title: "Missing Information", message: "Add item name and detail", preferredStyle: UIAlertControllerStyle.alert)
            alertController.addAction(UIAlertAction(title: "Dismiss", style: UIAlertActionStyle.default,handler: nil))
            self.present(alertController, animated: true, completion: nil)
        }
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

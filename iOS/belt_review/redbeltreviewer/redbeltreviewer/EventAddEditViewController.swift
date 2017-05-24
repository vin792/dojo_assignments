//
//  EventAddEditViewController.swift
//  redbeltreviewer
//
//  Created by Vineeth Raghunath on 5/23/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class EventAddEditViewController: UIViewController {

    //Variables
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    var delegate: AddEditEventDelegate = EventListTableViewController()
    var indexPath: IndexPath?
    
    //IB Outlets
    @IBOutlet weak var eventTitleTextField: UITextField!
    @IBOutlet weak var eventInfoTextField: UITextView!
    @IBOutlet weak var datePicker: UIDatePicker!
    
    //IB Actions
    @IBAction func myEventsBtnPressed(_ sender: UIButton) {
        eventInfoTextField.text?.removeAll()
        eventTitleTextField.text?.removeAll()
        datePicker.date = Date()
        if indexPath != nil {
            indexPath = nil
        }
        performSegue(withIdentifier: "ViewEventsSegue", sender: nil)
    }
    
    @IBAction func saveEventBtnPressed(_ sender: UIButton) {
        if eventTitleTextField.text != "", eventInfoTextField.text != "" {
            if indexPath == nil {
                delegate.addItem(eventTitle: eventTitleTextField.text!, eventInfo: eventInfoTextField.text!, eventDate: datePicker.date)
            } else {
                delegate.editItem(eventTitle: eventTitleTextField.text!, eventInfo: eventInfoTextField.text!, eventDate: datePicker.date, indexPath: indexPath!)
                indexPath = nil
            }
            
            eventInfoTextField.text?.removeAll()
            eventTitleTextField.text?.removeAll()
            datePicker.date = Date()
            performSegue(withIdentifier: "ViewEventsSegue", sender: nil)
            
        } else {
            let alertController = UIAlertController(title: "Missing Information", message: "Add event title and info", preferredStyle: UIAlertControllerStyle.alert)
            alertController.addAction(UIAlertAction(title: "Dismiss", style: UIAlertActionStyle.default,handler: nil))
            self.present(alertController, animated: true, completion: nil)
        }
    }
    
    //View lifecycle hooks
    override func viewDidLoad() {
        super.viewDidLoad()
        eventInfoTextField.layer.borderWidth = 1
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

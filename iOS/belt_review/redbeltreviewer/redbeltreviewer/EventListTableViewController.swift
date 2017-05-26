//
//  EventListTableViewController.swift
//  redbeltreviewer
//
//  Created by Vineeth Raghunath on 5/23/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit
import CoreData

class EventListTableViewController: UITableViewController {

    //Variables
    var events = Array<Event>()
    
    //CoreData
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    //View lifecycle hooks
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchAllEvents()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    //Tableview functions
    ////Set # of rows
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        return events.count
    }
    
    ////Set cell data
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "eventCell", for: indexPath) as! EventCell
        //cell.eventDetailLabel.text = events[indexPath.row].title
        
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
        let dateString = formatter.string(from: events[indexPath.row].date! as Date)
        let tempDate = formatter.date(from: dateString)
        formatter.dateFormat = "HH:mm"
        let cellDate = formatter.string(from: tempDate!)
        
        let title = events[indexPath.row].title
        
        cell.eventDetailLabel.text = "\(cellDate) -- \(title!)"
        
        //set cell attributes
        cell.delegate = self
        cell.row = indexPath
        
        if events[indexPath.row].completed {
            cell.completeBtnLabel.setTitleColor(UIColor.green, for: .normal)
            cell.completeBtnLabel.setTitle("Completed", for: .normal)
        }
        return cell
    }
    
    ////Delete cell
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        let deleteEvent = events[indexPath.row]
        managedObjectContext.delete(deleteEvent)
        
        saveItem()
        events.remove(at: indexPath.row)
        tableView.reloadData()
    }
    
    //CoreData functions
    ////Fetch all items
    func fetchAllEvents() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Event")
        let sortDescriptor = NSSortDescriptor(key: "date", ascending: true)
        request.sortDescriptors = [sortDescriptor]
        
        do {
            let result = try managedObjectContext.fetch(request)
            events = result as! Array<Event>
        } catch {
            print(error)
        }
    }
    
    ////save all items
    func saveItem() {
        do {
            try managedObjectContext.save()
        } catch {
            print(error)
        }
    }
}

//AddEditEventDelegate functions
extension EventListTableViewController: AddEditEventDelegate {
    func addItem(eventTitle: String, eventInfo: String, eventDate: Date) {
        let newEvent = NSEntityDescription.insertNewObject(forEntityName: "Event", into: managedObjectContext) as! Event
        newEvent.title = eventTitle
        newEvent.info = eventInfo
        newEvent.date = eventDate as NSDate
        
        saveItem()
    }
    
    func editItem(eventTitle: String, eventInfo: String, eventDate: Date, indexPath: IndexPath) {
        print("\(indexPath.row)")
        fetchAllEvents()
        print(events.count)
        let editedEvent = events[indexPath.row]
        editedEvent.title = eventTitle
        editedEvent.info = eventInfo
        editedEvent.date = eventDate as NSDate
        
        saveItem()
        fetchAllEvents()
    }
}

//Event cell delegate functions
extension EventListTableViewController: EventCellDelegate {
    func complete(btnPressed: UIButton, eventRow: IndexPath) {
        if events[eventRow.row].completed {
            btnPressed.setTitleColor(UIColor.init(colorLiteralRed: 0.0, green: 122.0/255.0, blue: 1.0, alpha: 1.0), for: .normal)
            btnPressed.setTitle("Complete", for: .normal)
            events[eventRow.row].completed = false
        } else {
            btnPressed.setTitleColor(UIColor.green, for: .normal)
            btnPressed.setTitle("Completed", for: .normal)
            events[eventRow.row].completed = true
        }
        
        saveItem()
    }
    
    func edit(eventRow: IndexPath) {
        let index = navigationController?.viewControllers.count
        let previousController = navigationController?.viewControllers[index! - 2] as! EventAddEditViewController
        previousController.eventInfoTextField.text = events[eventRow.row].info
        previousController.eventTitleTextField.text = events[eventRow.row].title
        previousController.datePicker.date = events[eventRow.row].date! as Date
        previousController.indexPath = eventRow
        
        navigationController?.popViewController(animated: true)
    }
}

//
//  ViewController.swift
//  todolistapp
//
//  Created by Vineeth Raghunath on 5/17/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit
import CoreData

class ToDoListViewController: UITableViewController, AddItemDelegate {
    
    var items = Array<Item>()
    let moc = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    @IBAction func addBtnPressed(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "AddItemSegue", sender: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchAllItems()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "ItemCell", for: indexPath) as! ItemCell
        cell.itemDetailLabel.text = items[indexPath.row].detail
        cell.itemNameLabel.text = items[indexPath.row].title
        
        //Format Date to Date String
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
        let dateString = formatter.string(from: items[indexPath.row].date! as Date)
        let tempDate = formatter.date(from: dateString)
        formatter.dateFormat = "MM/dd/yyyy"
        let cellDate = formatter.string(from: tempDate!)
        cell.itemDateLabel.text = cellDate
        
        // Return cell with added data
        return cell
    }
    
    //Toggle checkmark on table row
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let cell = tableView.cellForRow(at: indexPath) as! ItemCell
        
        if (cell.itemDateLabel.isHidden) {
            cell.accessoryType = .none
            cell.itemDateLabel.isHidden = false
        } else {
            cell.accessoryType = .checkmark
            cell.itemDateLabel.isHidden = true
        }
    }
    
    //Delete row and item from table and db
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        let deleteItem = items[indexPath.row]
        moc.delete(deleteItem)
        
        //save changes to db
        do {
            try moc.save()
        } catch {
            print("********************")
            print("Error: \(error)")
            print("********************")
        }
        
        items.remove(at: indexPath.row)
        tableView.reloadData()
    }
    
    //Return all items from the database
    func fetchAllItems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Item")
        
        do {
            let result = try moc.fetch(request)
            items = result as! [Item]
        } catch {
            print("********************")
            print("Error: \(error)")
            print("********************")
        }
    }
    
    //Segue prep function
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "AddItemSegue" {
            let controller = segue.destination as! AddItemViewController
            controller.delegate = self
        }
    }
    
    //Add item delegate functions
    func addItemViewController(_ controller: AddItemViewController, didAddItem title: String, itemDetail detail: String, itemDate date: Date) {
        
        let newItem = NSEntityDescription.insertNewObject(forEntityName: "Item", into: moc) as! Item
        newItem.detail = detail
        newItem.title = title
        newItem.date = date as NSDate
        
        items.append(newItem)

        //save changes to db
        do {
            try moc.save()
        } catch {
            print("********************")
            print("Error: \(error)")
            print("********************")
        }

        tableView.reloadData()
        
        navigationController?.popViewController(animated: true)
        dismiss(animated: true, completion: nil)
    }

}


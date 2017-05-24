//
//  ViewController.swift
//  bucketList
//
//  Created by Vineeth Raghunath on 5/15/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit
import CoreData

class BucketListViewController: UITableViewController, AddItemTableViewControllerDelegate {

    var items = Array<BucketListItem>()
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    @IBAction func addBtnPressed(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "EditItem", sender: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchAllItems()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "EditItem" {
            let navigationController = segue.destination as! UINavigationController
            let addItemTableViewController = navigationController.topViewController as! addItemTableViewController
            addItemTableViewController.delegate = self
            
            if let _ = sender {
                let indexPath = sender as! NSIndexPath
                let item = items[indexPath.row].text!
                addItemTableViewController.item = item
                addItemTableViewController.indexPath = indexPath
            }
        }
    }
    
    func addItemViewController(_ controller: addItemTableViewController, didPressCancelButton button: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }
    
    func addItemViewController(_ controller: addItemTableViewController, didFinishAddingItem item: String, at indexPath: NSIndexPath?) {
        if let ip = indexPath {
            let editItem = items[ip.row]
            editItem.text = item
        } else {
            let newItem = NSEntityDescription.insertNewObject(forEntityName: "BucketListItem", into: managedObjectContext) as! BucketListItem
            newItem.text = item
            items.append(newItem)
        }
        
        do {
            try managedObjectContext.save()
        } catch {
            print("\(error)")
        }
        
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
    
    func fetchAllItems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "BucketListItem")
        do {
            let result = try managedObjectContext.fetch(request)
            items = result as! [BucketListItem]
        } catch {
            print("\(error)")
        }
        
    }

}

extension BucketListViewController {
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "listItemCell", for: indexPath)
        cell.textLabel?.text = items[indexPath.row].text!
        return cell
    }
    
    override func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath) {
        performSegue(withIdentifier: "EditItem", sender: indexPath)
    }
    
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        let deleteItem = items[indexPath.row]
        managedObjectContext.delete(deleteItem)
        
        do {
            try managedObjectContext.save()
        } catch {
            print("\(error)")
        }
        
        items.remove(at: indexPath.row)
        tableView.reloadData()
    }
}


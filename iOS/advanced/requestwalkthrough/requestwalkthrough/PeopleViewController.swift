//
//  ViewController.swift
//  requestwalkthrough
//
//  Created by Vineeth Raghunath on 5/22/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit
class PeopleViewController: UITableViewController {
    // Hardcoded data for now
    var people = Array<[String: Any]>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
                
        StarWarsModel.getAllPeople(completionHandler: {
            // see: Swift closure expression syntax
            data, response, error in
            // data -> JSON data, response -> headers and other meta-information, error-> if one occurred
            // "do-try-catch" blocks execute a try statement and then use the catch statement for errors
            do {
                // try converting the JSON object to "Foundation Types" (NSDictionary, NSArray, NSString, etc.)
                if let jsonResult = try JSONSerialization.jsonObject(with: data!, options: JSONSerialization.ReadingOptions.mutableContainers) as? NSDictionary {
                    //print(jsonResult)
                    
                    if let results = jsonResult["results"] {
                        // coercing the results object as an NSArray and then storing that in resultsArray
                        let resultsArray = results as! NSArray
                        // now we can run NSArray methods like count and firstObject
                        for result in resultsArray {
                            if let person = result as? [String: Any] {
                                self.people.append(person)
                            }
                        }
                    }
                }
                //Reload Table View with JSON Data
                self.reloadTable()
            } catch {
                print(error)
            }
        })
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func numberOfSections(in tableView: UITableView) -> Int {
        // if we return - sections we won't have any sections to put our rows in
        return 1
    }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return the count of people in our data array
        return people.count
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Create a generic cell
        let cell = tableView.dequeueReusableCell(withIdentifier: "personCell", for: indexPath)
        // set the default cell label to the corresponding element in the people array
        if let personName = people[indexPath.row]["name"] as? String {
            cell.textLabel?.text = personName
        }
        // return the cell so that it can be rendered
        return cell
    }
    
    func reloadTable() {
        DispatchQueue.main.async {
            self.tableView.reloadData()
        }
    }
}



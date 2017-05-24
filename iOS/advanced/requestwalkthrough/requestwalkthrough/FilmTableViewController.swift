//
//  FilmTableViewController.swift
//  requestwalkthrough
//
//  Created by Vineeth Raghunath on 5/22/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class FilmTableViewController: UITableViewController {

    var films = Array<[String: Any]>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        StarWarsModel.getAllFilms(completionHandler: {
            data, response, error in
            
            do {
                //push JSON return object into films array
                if let jsonResult = try JSONSerialization.jsonObject(with: data!, options: JSONSerialization.ReadingOptions.mutableContainers) as? NSDictionary {
                    if let results = jsonResult["results"] {
                        let resultsArray = results as! NSArray
                        for result in resultsArray {
                            if let film = result as? [String: Any] {
                                self.films.append(film)
                            }
                        }
                    }
                }
                
                DispatchQueue.main.async {
                    self.tableView.reloadData()
                }
                
            } catch {
                print("JSON Parse Error: \(error)")
            }
        })
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        return films.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "filmCell", for: indexPath)
        if let filmName = films[indexPath.row]["title"] as? String {
            cell.textLabel?.text = filmName
        }
        return cell
    }
    

}

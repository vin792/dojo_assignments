//
//  ViewController.swift
//  tipster
//
//  Created by Vineeth Raghunath on 5/10/17.
//  Copyright © 2017 Vineeth Raghunath. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    
    @IBOutlet weak var smallLabel: UILabel!
    @IBOutlet weak var mediumLabel: UILabel!
    @IBOutlet weak var largeLabel: UILabel!
    @IBOutlet weak var smallTipLabel: UILabel!
    @IBOutlet weak var mediumTipLabel: UILabel!
    @IBOutlet weak var largeTipLabel: UILabel!
    @IBOutlet weak var smallGroupPersonLabel: UILabel!
    @IBOutlet weak var mediumGroupPersonLabel: UILabel!
    @IBOutlet weak var largeGroupPersonLabel: UILabel!
    @IBOutlet weak var totalLabel: UILabel!
    @IBOutlet weak var tipPercLabel: UILabel!
    @IBOutlet weak var groupSizeLabel: UILabel!
    
    var total: String = "0"
    var smallPercent: Double = 0
    var mediumPercent: Double = 0
    var largePercent: Double = 0
    var smallTip: Double = 0
    var mediumTip: Double = 0
    var largeTip: Double = 0
    var smallTotal: Double = 0
    var mediumTotal: Double = 0
    var largeTotal: Double = 0
    var groupSliderVal: Double = 4
    var tipPercSliderVal: Double = 0
    
    
    @IBAction func numberBtnPressed(_ sender: UIButton) {
        if (total == "0") {
            total = ""
            if (sender.tag == 11) {
                total += "."
            } else {
                total += String(sender.tag)
            }
        } else {
            if (sender.tag == 11) {
                total += "."
            } else {
                total += String(sender.tag)
            }
        }
        
        updateUI()
    }
    
    
    @IBAction func clearBtnPressed(_ sender: UIButton) {
        total = "0"
        updateUI()
    }
    
    
    @IBAction func groupSizeSlide(_ sender: UISlider) {
        groupSliderVal = round(Double(sender.value))
        updateUI()
    }
    
    
    @IBAction func tipSlide(_ sender: UISlider) {
        tipPercSliderVal = round(Double(sender.value))
        updateUI()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func updateUI() {
        totalLabel.text = total
        groupSizeLabel.text = "Group Size: \(Int(groupSliderVal))"
        
        updateTipPercents()
        updateTipAmounts()
        updatePerPersonAmounts()
    }
    
    func updateTipPercents() {
        smallPercent = 0.05 + tipPercSliderVal / 100
        mediumPercent = 0.10 + tipPercSliderVal / 100
        largePercent = 0.15 + tipPercSliderVal / 100
        
        smallLabel.text = "\(Int(smallPercent * 100))%"
        mediumLabel.text = "\(Int(mediumPercent * 100))%"
        largeLabel.text = "\(Int(largePercent * 100))%"
    }
    
    func updateTipAmounts() {
        smallTip = smallPercent * Double(total)!
        mediumTip = mediumPercent * Double(total)!
        largeTip = largePercent * Double(total)!
        
        smallTipLabel.text = String(format: "%.2f", smallTip)
        mediumTipLabel.text = String(format: "%.2f", mediumTip)
        largeTipLabel.text = String(format: "%.2f", largeTip)
    }
    
    func updatePerPersonAmounts() {
        smallTotal = Double(total)! + smallTip
        mediumTotal = Double(total)! + mediumTip
        largeTotal = Double(total)! + largeTip
        
        smallGroupPersonLabel.text = String(format: "%.2f", smallTotal / groupSliderVal)
        mediumGroupPersonLabel.text = String(format: "%.2f", mediumTotal / groupSliderVal)
        largeGroupPersonLabel.text = String(format: "%.2f", largeTotal / groupSliderVal)
    }
}


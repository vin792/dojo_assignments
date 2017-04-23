var mongoose = require('mongoose')
var Widgets = mongoose.model('Widgets')

module.exports = {
    index: function(req, res){
        Widgets.find({}, function(err, widgets){
            if(err){
                res.json({fail: "failed to retrieve widgets"})
            } else {
                if (widgets) {
                    res.json(widgets)
                } else {
                    res.json({fail: "no persons in db"})
                }
            }
        })
    }, 
    create: function(req, res, next){
        var newWidget = new Widgets({title: req.body.title})
        newWidget.save(function(err){
            if(err){
                res.json({fail: "failed to save new widget"})
            } else  {
                res.json(true)
            }
        })
    },
    delete: function(req, res){
        Widgets.remove({_id: req.params.id}, function(err){
            if (err) {
                res.json({fail: "failed to remove item"});
            } else {
                res.json(true);
            }
        })
    },
    update: function(req, res){
        Widgets.findOne({_id: req.params.id}, function(err, widget){
            if(err){
                res.json({fail: "failed to find widget to update"})
            } else {
                widget.title = req.body.title
                widget.save(function(err){
                    if(err){
                        console.log({fail: "failed to update widget"})
                    } else {
                        res.json(true);
                    }
                })
            }
        })
    }
}
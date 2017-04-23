var widgets = require('../controllers/widgets.js')
var path = require('path')

module.exports = function(app){
    app.get('/widgets.json', widgets.index)
    app.post('/addwidget.json', widgets.create)
    app.delete('/removewidget/:id/.json', widgets.delete)
    app.patch('/updatewidget/:id/.json', widgets.update)
    app.get('*', function (req, res) {
        res.sendFile(path.resolve('public/widget-app/dist/index.html'));
    })
}
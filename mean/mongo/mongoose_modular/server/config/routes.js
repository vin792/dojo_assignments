var owls = require('../controllers/owls.js')

module.exports = function(app){
    app.get('/', owls.index)
    app.get('/owls/new', owls.new_owl)
    app.post('/owls', owls.add_owl)
    app.get('/owls/:id', owls.view_owl)
    app.get('/owls/edit/:id', owls.edit_owl)
    app.post('/owls/:id', owls.update_owl)
    app.post('/owls/destroy/:id', owls.destroy_owl)
}
var persons = require('../controllers/persons.js')

module.exports = function(app){
    app.get('/', persons.index);
    app.get('/:name', persons.view_person);
    app.get('/new/:name/', persons.add_person);
    app.get('/remove/:name/', persons.remove_person);
}
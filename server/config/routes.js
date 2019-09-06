const controller = require('../controller/controller.js');


var path = require('path');

module.exports = function(app){
    //delete
    app.delete('/team/:id', controller.delete);

    //get all products
    app.get('/team', controller.getPlayers);

    //create new product post
    app.post('/team', controller.create);

    //get specific product
    app.get('/team/:id', controller.getOne);

    // update product
    app.put('/team', controller.update);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}

const mongoose = require('mongoose');
const model = require('../models/model');

module.exports = {
    //delete
    delete: function(req,res){
        model.Team.deleteOne({_id: req.params.id}, function(err,data){
            if(err){
                console.log(err);
                res.json({message: "Error" , error: err})
            } else {
                res.json(data);
            }
        })
    },


    //update product
    update: function(req,res){
        console.log(req.body);
        model.Team.updateOne({_id: req.body._id},
            {$set: {
            status1: req.body.status1,
            status2: req.body.status2,
            status3: req.body.status3
        }}, function(err,data){
            if(err){
                console.log('Error', err);
                res.json({message:"Error", error:err});
            } else {
                res.json(data);
            }
        })
    },

    //get one product
    getOne: function(req, res){
        model.Team.findOne({_id: req.params.id}, function(err, data){
            if(err) {
                console.log("Error", err);
                res.json({message: "Error", error: error})
            } else {
                console.log("Success");
                res.json(data);
            }
        })
    },

    //get all products
    getPlayers: function(req, res){
        model.Team.find({}, function(err, data){
            if(err) {
                console.log("Error", err);
                res.json({message: "Error", error: error})
            } else {
                console.log("Success");
                res.json(data);
            }
        })
    },

    //create product post
    create: function(req, res){
        model.Team.create({
            name: req.body.name,
            position: req.body.position
        }, function(err, data){
            if(err) {
                console.log("Error", err);
                res.json({message: "Error", error: err})
            } else {
                console.log("Success");
                res.json(data);
            }
        })
    }
}

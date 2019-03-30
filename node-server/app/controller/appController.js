//functions
'use strict';
const Joi = require('joi');
var express = require('express');

// var app = express();
// var accountRoutes = express.Router();

//require Account model in our routes module 

var account = require('../model/appModel.js');


module.exports = function (app) {
    app.route('/register').post(function (req, res) {
        console.log("appcontroller yes")
        var new_account = new account(req.body); //assigning new_account details to new_account
        const schema = {
            password: Joi.string().min(8).required()
        }
        var result = Joi.validate({ password: new_account.password }, schema);
        if (!new_account.memberID || !new_account.password) {
            res.status(200).send('Please input memberID/password'); //bad request
            return;
        }
        
        if (result.error) { //if there is a validation error
            res.status(200).send("Your password needs to be at least 8 characters long");//bad req
            return;
        } else {
            account.create_new_account(new_account, function (err, new_account) { //calls method in appModel.js
                console.log("2nd parameter");
                console.log(new_account);
                console.log(err);
                if (new_account == null){
                    res.status(200)
                    res.send(err);
                    //return;
                }else{
                    res.status(200).json(new_account);
                }
            });
        }
    });

    app.route('/').post(function (req, res) { //log-in  
        account.log_in(req.body, function (err, account) { //calls method in appModel.js
            console.log("account");
            console.log(account);
            //console.log(err);
            if (err) {
                console.log("nyanyanya")
                res.send(err);
            }
            else if(account == null){
                console.log("res 401")
                res.status(401).json();
            }else{
                res.json(account);
            }
        });
    });
}

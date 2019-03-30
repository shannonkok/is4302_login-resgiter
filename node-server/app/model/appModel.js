//Account constructor + methods 
'user strict';
var sql = require('./db.js');

//account object constructor
//define schema for items
var Account = function(account){ //unsure about this 
    this.memberID = account.memberID;
    this.password = account.password;
};
Account.create_new_account = function createUser(new_account, result) {   
    console.log("did it come in here")
    console.log(new_account.memberID)
    sql.query("SELECT memberID from login_details where memberID =" + "'"+new_account.memberID + "'", function(err,res){
        console.log(res);
        console.log(res[0])
        if(res == null){
            console.log("wait")
            sql.query("INSERT INTO login_details set ?", new_account, function (err, res) {
                if(err) { //if there is an error
                    console.log("error: ", err);
                    result(err, null);
                    //return;
                }else{ //if there are no errors
                    result(null, "Account created successfully"); //notify me of the insertId after it has been done
                    console.log("Account created successfully");
                    //return;

                }
            });              
        }else{
            result("memberID has been taken", null);
          
        }
    });
    
};

Account.log_in = function login(account, result) {
    console.log("Hello")
    // console.log(account.beneficiary)
    //console.log(account.memberID);
    sql.query("SELECT password FROM login_details where memberID=" + "'"+account.beneficiary_ID+ "'", function(err,res){

    // sql.query("SELECT password FROM login_details where memberID='donor001'", function(err,res){
        console.log("appmodel")
        console.log(res[0]);
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            if (res[0] == null){
                console.log("Wrong memberID");
                result("Wrong memberID", null)
            }
            else if(res[0].password != account.beneficiary_password){
                // console.log()
                console.log("Wrong password");
                result("Wrong Password", null)
            }else{
                console.log("Welcome " + account.beneficiary_ID);
                result(null, account);
            }    
        }
    });
};

module.exports= Account;
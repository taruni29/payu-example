
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var User = require('../user/User');
var jsSHA = require("jssha");

  exports.register=async(req, res) =>{
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.create({
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
     // console.log(token+" token")
      res.status(200).send({ auth: true, token: token });
    });
  }

  exports.getUser=async(req, res) =>{
    var token = req.headers['x-access-token'];
    // console.log("mytoken "+token)
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      User.findById(decoded.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        console.log(JSON.stringify(user)+"responce data")
        res.status(200).send(user);
      });
    });
  }

  exports.updateUser=async(req, res) =>{
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
            if (err) return res.status(500).send("There was a problem updating the user.");
            res.status(200).send(user);
        });

    });
  }

  exports.deleteUser=async(req, res) =>{
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
     });

    });
  }

  exports.payUMoneyPayment = function (req, res) {
    if (!req.body.txnid || !req.body.amount || !req.body.productinfo
         || !req.body.firstname || !req.body.email) {
           res.send("Mandatory fields missing");
     } else {
           var pd = req.body;
           var hashString = 'PjkmmhCV'// Merchant Key
                    + '|' + pd.txnid
                    + '|' + pd.amount + '|' + pd.productinfo + '|'
                    + pd.firstname + '|' + pd.email + '|'
                    + '||||||||||'
                    + 'H9z7ySZ2tF' // Your salt value
           var sha = new jsSHA('SHA-512', "TEXT");
           sha.update(hashString)
           var hash = sha.getHash("HEX");
           res.send({ 'hash': hash });
     }
  }

  
  exports.payUMoneyPaymentResponse = function (req, res) {
      var pd = req.body;
      //Generate new Hash
       var hashString ='H9z7ySZ2tF' + '|' + pd.status + '||||||||||' + '|'
       + pd.email + '|' + pd.firstname + '|' + pd.productinfo + '|' + pd.amount +
        '|' + pd.txnid + '|' + 'PjkmmhCV'
       var sha = new jsSHA('SHA-512', "TEXT");
       sha.update(hashString)
       var hash = sha.getHash("HEX");
       // Verify the new hash with the hash value in response
       if (hash == pd.hash) {
           res.send({'status':pd.status});
       } else {
           res.send({'status':"Error occured"});
       }
    }

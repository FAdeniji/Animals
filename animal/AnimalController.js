var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Animal = require('./Animal');

// CREATES A NEW USER
router.post('/', function (req, res) {
    Animal.create({
            name : req.body.name,
            type : req.body.type,
            sound : req.body.cound
        },
        function (err, animal) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(animal);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    Animal.find({}, function (err, animals) {
        if (err) return res.status(500).send("There was a problem finding the animals.");
        res.status(200).send(animals);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    Animal.findById(req.params.id, function (err, useanimalr) {
        if (err) return res.status(500).send("There was a problem finding the animal.");
        if (!user) return res.status(404).send("No animal found.");
        res.status(200).send(animal);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Animal.findByIdAndRemove(req.params.id, function (err, animal) {
        if (err) return res.status(500).send("There was a problem deleting the animal.");
        res.status(200).send("Animal "+ user.name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {

    Animal.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, animal) {
        if (err) return res.status(500).send("There was a problem updating the animal.");
        res.status(200).send(animal);
    });
});

module.exports = router;

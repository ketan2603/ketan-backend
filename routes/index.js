var express = require('express');
var router = express.Router();
const db = require('../sql')
const queryBuiler = require('../querybuilders/querybuilder');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});
router.all('/zone/list', function (req, res) {
  const data = req.query || req.body;
  db.executeQuery(queryBuiler.getZones(), (zones) => {
    res.send(zones);
  })
});
router.all('/city/list', function (req, res) {
  const data = req.query || req.body;
  console.log("------------",data)
  db.executeQuery(queryBuiler.getAllCityByZone(data), (cities) => {
    res.send(cities);
  })
});
router.all('/city/listAll', function (req, res) {
  const data = req.query || req.body;
  db.executeQuery(queryBuiler.getAllCities(), (cities) => {
    res.send(cities);
  })
});

router.all('/city/getUserbyCity', function (req, res) {
  console.log(req.query)
  // const data = req.query || req.body;
  const data = req.body;
  db.executeQuery(queryBuiler.getAllUserBycity(data), (cities) => {
    res.send(cities);
  })
});

router.all('/city/getFamilybyCity', function (req, res) {
  console.log(req.query)
  console.log("req.body", req.body)
  const data = req.body;
  db.executeQuery(queryBuiler.getAllFamilyBycity(data), (cities) => {
    res.send(cities);
  })
});

router.all('/family/memer/add', function (req, res) {
  console.log(req.query)
  console.log("req.body", req.body)
  const data = req.body;
  if (!data.family_id) {
    return res.send({ success: 0, msg: "Invalid data." });
  }
  db.executeQuery(queryBuiler.insertFamilyMember(data), (person) => {
    res.send({ success: 1, msg: "Member add successfully." });
  })
});

router.all('/family/memer/update', function (req, res) {
  console.log(req.query)
  console.log("req.body", req.body)
  const data = req.body;
  if (!data.family_id) {
    return res.send({ success: 0, msg: "Invalid data." });
  }
  if (!data.person_id) {
    return res.send({ success: 0, msg: "Invalid data." });
  }
  db.executeQuery(queryBuiler.updateFamilyMember(data), (person) => {
    res.send({ success: 1, msg: "Member data updated successfully." });
  })
});
router.all('/familyname/add', function (req, res) {
  console.log(req.query)
  console.log("req.body", req.body)
  const data = req.body;
  if (!data.family_id) {
    return res.send({ success: 0, msg: "Invalid data." });
  }
  db.executeQuery(queryBuiler.insertFamilyName(data), (person) => {
    res.send({ success: 1, msg: "Family add successfully." });
  })
});

module.exports = router;

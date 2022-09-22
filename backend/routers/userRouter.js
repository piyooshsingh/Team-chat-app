const express = require("express");
const router = express.Router();

const Model = require("../models/userModel");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
console.log(salt);

router.post("/add", (req, res) => {
  const formdata = req.body;
  console.log(formdata);
  const hash = bcrypt.hashSync(formdata.password, salt);
  formdata.password = hash;

  new Model(formdata)
    .save()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
router.get("/getall", (req, res) => {
  Model.find({})
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/getbyemail/:email", (req, res) => {
  console.log(req.params.email);

  Model.find({ email: req.params.email });
  Model.find()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)

    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
router.post("/authenticate", (req, res) => {
  console.log(req, body);
  console.log(formdata);
  // Model.findOne({email : formdata.email,password : formdata.password})
  Model.findOne({ email: formdata.email })
    .than((result) => {
      //logi for valadating usercreadebtials
      //if email and password matched then result will contain their data

      if (result) {
        if (bcrypt.compareSync(formdata.password, result.password))
          res.json(result);
        else {
          res.status(401).json({ status: "Login Failed" });
        }
      } else {
        //if resukt is null
        res.status(401).json({ status: "Login Failed" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500), json(err);
    });
});

module.exports = router;

let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Aadhar Model
let aadharSchema = require('../models/Aadhar');
// CREATE Aadhar
router.route('/create-aadhar').post((req, res, next) => {
  aadharSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
// READ Aadhars
router.route('/').get((req, res) => {
  aadharSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get Single Aadhar
router.route('/edit-aadhar/:id').get((req, res) => {
  aadharSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Aadhar
router.route('/update-aadhar/:id').put((req, res, next) => {
  aadharSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Aadhar updated successfully !')
    }
  })
})
// Delete Aadhar
router.route('/delete-aadhar/:id').delete((req, res, next) => {
  aadharSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = router;
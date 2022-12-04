const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let aadharSchema = new Schema({
  number: {
    type: Number
  },
  name: {
    type: String
  },
  age: {
    type: Number
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  mobileno: {
    type: Number
  },
  linkedpanno: {
    type: Number
  },
  linkedpassportno: {
    type: Number
  },
  linkedbankaccountno: {
    type: Number
  }
}, {
    collection: 'aadhars'
  })
module.exports = mongoose.model('Aadhar', aadharSchema)
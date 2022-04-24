const mongoose = require('mongoose');
const schema = mongoose.Schema;


const profileschema = new schema({
    Name: String,
    Age: Number
})


const profile = mongoose.model('Profile', profileschema);
module.exports = profile;
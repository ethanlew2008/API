const mongoose = require('mongoose');
const schema = mongoose.Schema;


const scoreschema = new schema({
    Name: String,
    Score: Number
})


const score = mongoose.model('Score', scoreschema);
module.exports = score;
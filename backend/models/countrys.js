const { Schema, model } = require('mongoose');


const Countrys = new Schema({
    country: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('Countrys', Countrys)
let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema( {
    name: String,
    number : Number,
    email: String,
},
{
    collection:"contact"
});

module.exports = mongoose.model('Contact', contactModel);
const mongoose = require('mongoose');


const userShema = mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    age:{
        type: Number,
        required:true
    },
    email:{
        type: 'string',
        required:true
    }

});


module.exports = mongoose.model('User', userShema);
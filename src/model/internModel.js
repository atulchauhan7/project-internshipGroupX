const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema({
    name: { 
        type: String,
         require: true,
          unique: true },
     email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            validate: {
                validator: function (email) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                }, message: 'Please fill a valid email address', isAsync: false
            }
        },
    
        mobile: {
            type: String,
            trim: true,
            unique: true,
            required: 'Mobile is required',
            validate: {
                validator: function (mobile) {
                    return  /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(mobile)
                }, message: 'Please fill a valid mobile number', isAsync: false
            }
        },
        collegeId: {
            type: ObjectId,
            ref: 'College',
            required: true,
        },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Intern', internSchema)
import mongoose from "mongoose";


// create student schema
const userSchema = mongoose.Schema({

    first_name : {
        type : String,
        trim : true,
        default : ''
    },
    username : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    secondary : {
        type : String,
        trim : true,
        default : ''
    },
    email  : {
        type : String,
        trim : true,
        unique : true
    },
    phone : {
        type : String,
        trim : true,
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    gender : {
        type : String,
        enum : ["Male", "Famale", "Custom"]
    },
    birth_day : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    birth_month : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    birth_year : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    profile_photo : {
        type : String,
        default : null
    },
    bio : {
        type : String,
        default : null
    },
    flowing : {
        type : Array,
        default : []
    },
    flowers : {
        type : Array,
        default : []
    },
    block : {
        type : Array,
        default : []
    },
    posts : {
        type : Array,
        default : []
    },
    isActivate : {
        type : Boolean,
        default : false
    },
    access_token : {
        type : String,
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    status : {
        type : Boolean,
        default : true
    },
    trash : {
        type : Boolean,
        default : false
    }

}, {
    timestamps : true
});




// export model 
export default mongoose.model('User', userSchema);

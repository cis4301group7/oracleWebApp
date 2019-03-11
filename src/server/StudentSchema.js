var mongoose = require('mongoose'), 
    Schema = mongoose.Schema
    uuidv4 = require('uuid/v4');

var studentSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    city: String,
    country: String,
    zip: Number,
    email: String,
    description: String,
    team_id: Schema.Types.ObjectId
});

// auto append update/created time fields
studentSchema.pre('save', function(next){
    var currentDate = new Date();
    this.updated_at = currentDate;

    if(!this.created_at)
        this.created_at = currentDate;

    // if(!this.user_id)
    //     this.user_id = uuidv4();

    if(this.userName == null || this.firstName == null || this.lastName == null)
        return resizeBy.json({success: false, message: 'Missing fields!'});

    next();
});

var Student = mongoose.model('Student', studentSchema);
module.exports = Student;
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema,
    uuidv4 = require('uuid/v4');

var projectSchema = new Schema({
    projTitle: String,
    companyName: String,
    description: String,
    featuresRequested: String,
    started: Boolean,
    archiveDate: Date,
    projLeader: String, // uuid of student
    startBy: Date,
    dueBy: Date,
    oneLineAddress: String,
    skillsRequested: String,
    estTeamSize: Number,
    other: String
});

// auto append update/created time fields
projectSchema.pre('save', function(next){
    var currentDate = new Date();
    this.updated_at = currentDate;

    if(!this.created_at)
        this.created_at = currentDate;

    // if(!this.proj_id)
    //     this.proj_id = uuidv4();

    if(this.projTitle == null)
        return resizeBy.json({success: false, message: 'Missing fields!'});

    next();
});

var Project = mongoose.model('Project', projectSchema);
module.exports = Project;
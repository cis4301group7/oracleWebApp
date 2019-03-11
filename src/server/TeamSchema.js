var mongoose = require('mongoose'), 
    Schema = mongoose.Schema
    uuidv4 = require('uuid/v4');

var teamSchema = new Schema({
    teamName: String,
    description: String,
    proj_id: Schema.Types.ObjectId
});

// auto append update/created time fields
teamSchema.pre('save', function(next){
    var currentDate = new Date();
    this.updated_at = currentDate;

    if(!this.created_at)
        this.created_at = currentDate;

    // if(!this.team_id)
    //     this.team_id = uuidv4();

    if(this.teamName == null)
        return resizeBy.json({success: false, message: 'Missing fields!'});

    next();
});

var Team = mongoose.model('Team', teamSchema);
module.exports = Team;
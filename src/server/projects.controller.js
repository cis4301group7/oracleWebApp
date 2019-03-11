const mongoose = require('mongoose');
const config = require('./config/config');
const Project = require('./ProjectSchema');
const Team = require('./TeamSchema');
const Student = require('./StudentSchema');
// for creating other records...
const ObjectId = require('mongodb').ObjectID;

mongoose.connect(config.db.uri);
var myModel = mongoose.model('Project', Project.Project);

exports.getAllProposedProjects = async function(req, res) {
    // These were used one at a time to initialize the collection and debug the db system
    //myModel.create({"projTitle":"Charity Drive","companyName":"GivingOrg","description":"Donation Portal","featuresRequested":"Transaction Pages","started":false,"archiveDate":"2018-12-12T05:00:00.000Z","projLeader":null,"startBy":"2018-12-13T05:00:00.000Z","dueBy":"2019-10-11T04:00:00.000Z","oneLineAddress":"1 Helping Ln.","skillsRequested":"C#, Angular, HTML","estTeamSize":"4","other":"Short Deadline."});
    //myModel.create({"projTitle":"Charity Drive","companyName":"GivingOrg","description":"Donation Portal","featuresRequested":"Transaction Pages","started":false,"archiveDate":"2018-12-12T05:00:00.000Z","projLeader":null,"startBy":"2018-12-13T05:00:00.000Z","dueBy":"2019-10-11T04:00:00.000Z","oneLineAddress":"5555 Test Ln.","skillsRequested":"C#, React, HTML","estTeamSize":"3","other":""});
    //myModel.create({"projTitle":"Electronic Recycle Program","companyName":"ERCycle","description":"Registration for for Recycling Plant","featuresRequested":"TESTESTSETSETSETSETSESTEST","started":true,"archiveDate":undefined,"projLeader":null,"startBy":"2018-12-13T05:00:00.000Z","dueBy":"2019-10-11T04:00:00.000Z","oneLineAddress":"5555 Test Ln.","skillsRequested":"C#, React, HTML","estTeamSize":"3","other":""});
    //myModel.create({"projTitle":"Fishing Location Detection","companyName":"FishRUS","description":"Lunar Cycle chart visualization","featuresRequested":"TESTESTSETSETSETSETSESTEST","started":true,"archiveDate":undefined,"projLeader":null,"startBy":"2018-12-13T05:00:00.000Z","dueBy":"2019-10-11T04:00:00.000Z","oneLineAddress":"5555 Test Ln.","skillsRequested":"PHP (Laravel)","estTeamSize":"5","other":"Large group size"});
    //myModel.create({"projTitle":"Shape Demo","companyName":"GeoLyfe","description":"Render different surfaces","featuresRequested":"Some features...","started":true,"archiveDate":undefined,"projLeader":null,"startBy":"2018-12-13T05:00:00.000Z","dueBy":"2019-10-11T04:00:00.000Z","oneLineAddress":"2222 23rd St.","skillsRequested":"Python (flask), PHP, WebGL","estTeamSize":"1","other":"Single person project"});
    //myModel.create({"projTitle":"Candy Preference Survey","companyName":"Candy Co.","description":"Survey System for candy","featuresRequested":"Implement survey","started":true,"archiveDate":"2018-12-12T05:00:00.000Z","projLeader":null,"startBy":"2018-12-13T05:00:00.000Z","dueBy":"2019-10-11T04:00:00.000Z","oneLineAddress":"2222 23rd St.","skillsRequested":"Python (flask), PHP","estTeamSize":"4","other":""});
    //myModel.create({"projTitle":"Las Vegas Petting Sitting Matcher","companyName":"Dog Inc.","description":"Match Walkers w/ ownders","featuresRequested":"Registration and page to actually match owners","started":true,"archiveDate":"2018-12-12T05:00:00.000Z","projLeader":null,"startBy":"2018-12-13T05:00:00.000Z","dueBy":"2019-10-11T04:00:00.000Z","oneLineAddress":"2222 23rd St.","skillsRequested":"React Nodejs","estTeamSize":"5","other":""});
    
    //To initalize teams
    //Team.create({"teamName": "Group-A", "description": "Group of 3 experienced, a lot of React experience.", "proj_id": ObjectId("5c11900d35e6c34460a0bd43")});
    //Team.create({"teamName": "Group-B", "description": "Group of 5 experienced, a lot of PHP experience.", "proj_id": ObjectId("5c1192c61912af48fc58ff7e")});
    //Team.create({"teamName": "Group-C", "description": "Only one individual, suitable for a small project.", "proj_id": ObjectId("5c11953dfea4e54e98a1da38")});

    //To initialize some students
    //Student.create({"firstName": "Bob", "lastName": "Vance", "userName": "Bobby", "city": "Sarasota", "country": "US", "zip": 34233, "email": "Bob@gmail.com", "description": "Some experience in Web Development", "team_id": ObjectId("5c11b60d3eae2f5464108b18")});

    myModel.find({"started": false}, function(err, projList){
        if(err){
            res.send(err);
        }
        console.log(projList);
        res.json(projList);
    })
}

exports.getAllCurrentProjects = async function(req, res) {
    myModel.find({"started": true, "archiveDate": null}).lean().exec(function(err, projList){
        if(err){
            res.send(err);
        }
        console.log(projList[0]);
        // for each project add the associated team and team student
        var totProjects = projList.length;
        var currProjectIndex = 1;
        var callbackFunc = () => {
            // I'm sure there is a better fix for this but for now...
            setTimeout(function() {
                res.json(projList);
            }, 150);
        }
        projList.forEach((project, index) => {
            // fetch team details
            Team.find({"proj_id": project._id}, function(err, currTeam){
                if(err){
                    res.send(err);
                }
                console.log(currTeam[0]);
                projList[index].teamName = currTeam[0].teamName;
                console.log(projList);
                Student.find({"team_id": currTeam[0]._id}, function(err, studentList){
                    if(err){
                        res.send(err);
                    }
                    console.log(studentList);
                    projList[index].groupMembers = studentList;
                    if(++currProjectIndex === totProjects){
                        console.log("callback triggered");
                        callbackFunc();
                    }
                })
            })
        });
    }) 
}

exports.getAllArchivedProjects = async function(req, res) {
    // myModel.find({"archiveDate": { $ne: null } }, function(err, projList){
    //     if(err){
    //         res.send(err);
    //     }
    //     console.log(projList[0]);
    //     res.json(projList);
    // })
    myModel.find({"archiveDate": { $ne: null }}).lean().exec(function(err, projList){
        if(err){
            res.send(err);
        }
        console.log(projList[0]);
        // for each project add the associated team and team student
        var totProjects = projList.length;
        var currProjectIndex = 1;
        var callbackFunc = () => {
            // I'm sure there is a better fix for this but for now...
            setTimeout(function() {
                res.json(projList);
            }, 150);
        }
        projList.forEach((project, index) => {
            // fetch team details
            Team.find({"proj_id": project._id}, function(err, currTeam){
                if(err){
                    res.send(err);
                }
                console.log(currTeam[0]);
                projList[index].teamName = currTeam[0].teamName;
                console.log(projList);
                Student.find({"team_id": currTeam[0]._id}, function(err, studentList){
                    if(err){
                        res.send(err);
                    }
                    console.log(studentList);
                    projList[index].groupMembers = studentList;
                    if(++currProjectIndex === totProjects){
                        console.log("callback triggered");
                        callbackFunc();
                    }
                })
            })
        });
    }) 
}

exports.getSelectedProject = async function(req, res) { //{_id: "something..."}
    myModel.findOne({_id : req.query.projid}, function(err, proj){
        if(err){
            res.send(err);
        }
        console.log(req.query.projid);
        console.log(proj);
        res.json(proj);
    })
}

exports.addProjectProposal = async function(req, res) {
    //var myProposal = req.
    myModel.create({}, function(err){
        if(err){
            res.send(err);
            console.log(err);
        }
        res.send(200);
    })
    res.json(req); //just return what was posted...
}
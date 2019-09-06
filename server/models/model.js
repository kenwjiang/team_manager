const config = require('../config/config');
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const {
    db: {
        host,
        port,
        name
    }
} = config.config;

const connectionString = `mongodb://${host}/${name}`;

mongoose.connect(connectionString, { useNewUrlParser: true });

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must enter a name!"],
        unique: true,
        minlength:[2, "Must be at least 2 characters long!"]
    },
    position: {
         type: String,
    },
    status1: {type: String, default: "undecided"},
    status2: {type: String, default: "undecided"},
    status3: {type: String, default: "undecided"}},
    {timestamps: true}
)

mongoose.model("Team", TeamSchema);
var Team = mongoose.model('Team')
// Team.plugin(uniqueValidator);

module.exports ={
    Team: Team
}

const mongoose = require('mongoose');
const {MONGODB_CONNECTION_STRING} = require('../config/index');

//const connectionString ="mongodb://kalwarshafqat78:kalwar15878@ac-pck6oyd-shard-00-00.jc3riur.mongodb.net:27017,ac-pck6oyd-shard-00-01.jc3riur.mongodb.net:27017,ac-pck6oyd-shard-00-02.jc3riur.mongodb.net:27017/?ssl=true&replicaSet=atlas-1352co-shard-0&authSource=admin&retryWrites=true&w=majority";

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);
        console.log(`Database connected to host: ${conn.connection.host}`); 
        console.log("database connected successfully.");   
    } catch (error) {
        console.log(`Error: ${error}`);
    }
    
}

module.exports = dbConnect;


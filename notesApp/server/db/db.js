const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose.connect(process.env.DBURI, {})
        .then(() => console.log('Connected to DataBase'))
        .catch((err)=> console.log('Error in DB Connection: ', err))
}    

module.exports = dbConnection;
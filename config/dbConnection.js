const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
      const connect =  await mongoose.connect(process.env.MONGODB_CNN);
        console.log(`DB online ${connect.connection.host} ${connect.connection.name}`);
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la DB');
        process.exit(1);
    }
}
module.exports = dbConnection
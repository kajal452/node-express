const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
      const connect =  await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`DB online ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la DB');
        process.exit(1);
    }
}
module.exports = dbConnection
//MONGOOSE IMPORT
const mongoose = require('mongoose');

//CONNECT TO MONGODB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/prepstart-server', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

var mongoose = require('mongoose');

const mongoURL = process.env.PORT === 3000 ? 
    'mongodb://localhost:27017/TodoApp' : 
    'mongodb://<dbuser>:<dbpassword>@ds227469.mlab.com:27469/todo-app';

mongoose.Promise = global.Promise;
mongoose.connect(mongoURL);

module.exports = {
    mongoose: mongoose
}
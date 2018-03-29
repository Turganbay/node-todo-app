var mongoose = require('mongoose');

const mongoLocalURL = 'mongodb://localhost:27017/TodoApp';
const mongoMLabUrl = 'mongodb://turganbay:turboturbo92@ds227469.mlab.com:27469/todo-app';

mongoose.Promise = global.Promise;
mongoose.connect(mongoMLabUrl);

module.exports = {
    mongoose: mongoose
}
var mongoose = require('mongoose');

const mongoLocalURL = 'mongodb://localhost:27017/TodoApp';
const mongoMLabUrl = 'mongodb:/.../todo-app';

mongoose.Promise = global.Promise;
mongoose.connect(mongoMLabUrl);

module.exports = {
    mongoose: mongoose
}

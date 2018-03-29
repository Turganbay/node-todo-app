const express = require('express');
const bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
        console.log('Save todo', doc);
    }, (e) => {
        res.status(400).send(e);
        console.info('Unable to save todo', e);
    })

});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(3000, () => {
    console.info('Started on port 3000');
});

// var newUser = new User({
//     email: 't.myrzaliyev@mail.ru'
// });

// newUser.save().then((doc) => {
//     console.log('Save user\n', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// })

// var newTodo = new Todo({
//     text: 'ABC'
// });

// newTodo.save().then((doc) => {
//     console.log('Save todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });


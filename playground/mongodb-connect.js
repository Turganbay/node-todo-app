// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 

    console.log('Connected to MongoDB server');

    const todoAppDB = client.db('TodoApp');

    // client.db('TodoApp').collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // Insert new doc into Users (name, age, location)
    // todoAppDB.collection('Users').insertOne({
    //     _id: 132,
    //     name: 'Turganbay',
    //     age: 25,
    //     location: 'Almaty'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // });

    client.close();
});
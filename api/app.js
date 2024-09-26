import mongoose from 'mongoose';
import express from 'express';
import User from './models/user.model.js';
var app = express();
app.get('/api', function (req, res) {
  res.send('Hello World!'); 
});


// Connect to MongoDB
mongoose
    .connect('mongodb+srv://simalkangalli:Kr3c3O0I46OZunaN@core.ioto7.mongodb.net/?retryWrites=true&w=majority&appName=CORE');

// Handle connection events
const db = mongoose.connection;
db
    .on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});



// Create a new user
const newUser = new User({ name: 'John', email: 'john@example.com', age: 30 });
newUser.save()
    .then(() => console.log('User created'))
    .catch(err => console.error(err));

// Find users
User.find({ age: { $gte: 25 } })
    .then(users => console.log('Users:', users))
    .catch(err => console.error(err));

// Update a user
User.updateOne({ _id: 'user_id' }, { age: 35 })
    .then(() => console.log('User updated'))
    .catch(err => console.error(err));

// Delete a user
User.deleteOne({ _id: 'user_id' })
    .then(() => console.log('User deleted'))
    .catch(err => console.error(err));
    
    app.listen(3001, function () {
        console.log('Example app listening on port 3001!');
      });

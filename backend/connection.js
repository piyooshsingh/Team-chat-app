const mongoose = require('mongoose');
const dbName = 'chatapp';

const url =`mongodb+srv://Piyooshsingh:piyoosh123@cluster0.nxcnug6.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
   
});

module.exports = mongoose;




















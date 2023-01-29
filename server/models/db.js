const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_STRING,{useNewURLParser : true , useUnifiedTopology : true});

const db = mongoose.connection;
db.on('error' ,console.error.bind(console,'Connection Error'));

db.once('open',function(){
    console.log('Connected');
})
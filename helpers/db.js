var mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb+srv://sercan:sercan123@todo.1hytl.mongodb.net/Todo?retryWrites=true&w=majority", {useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:true});

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
      });
      mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
      });

    mongoose.Promise = global.Promise;
}
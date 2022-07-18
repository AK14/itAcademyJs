

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const toDoScheme = new Schema({
    text:String,
    date:Number,
});

// подключение


const Todo = mongoose.model("Todo", toDoScheme);

const task1 = new Todo({
    text: "Get documents",
    date: 1
});

/*
user.save(function(err){
    mongoose.disconnect();  // отключение от базы данных

    if(err) return console.log(err);
    console.log("Сохранен объект", user);
});
*/


//


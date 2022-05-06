export default function TodoModel(mongoose) {
    const todoSchema = mongoose.Schema({
        userid: {type: String, maxlength:10, unique:1},
        task: {type: String, maxlength:10, unique:1}
    })





}


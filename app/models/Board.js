export default function BoardModel(mongoose) {
    const boardSchema = mongoose.Schema({
        title: {type: String, maxlength: 10, unique: 1},
        name: {type: String, maxlength: 10, unuque: 1},
        subject: {type: String, maxlength: 10, unuque: 1}
    }, {timestamps: true})


}
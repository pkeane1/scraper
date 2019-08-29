var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
	title: String,

	body: String,
	author: String,
	article: {
		type: Schema.Types.ObjectId,
		ref: "Article"
	}
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
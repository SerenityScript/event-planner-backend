const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  title: { type: String, required: true },
  done: { type: Boolean, default: false }
})

module.exports = mongoose.model('Task', taskSchema);
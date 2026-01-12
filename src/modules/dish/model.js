const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  name: { type: String, required: true },
  responsible: { 
    type: String,
    enum: ['me', 'guest', 'delivery'],
    default: 'me',
    required: true
  },
  note: { type: String, required: false}
})

module.exports = mongoose.model('Dish', dishSchema);
const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  name: { type: String, required: true },
  status: { 
    type: String,
    enum: ['invited', 'confirmed', 'declined'],
    default: 'invited',
    required: true
  }
})

module.exports = mongoose.model('Guest', guestSchema);
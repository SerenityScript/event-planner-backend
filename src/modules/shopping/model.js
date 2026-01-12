const mongoose = require('mongoose');

const shoppingItemSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  name: { type: String, required: true },
  category: { 
    type: String,
    enum: ['food', 'drinks', 'decor', 'other'],
    default: 'food',
    required: true
  },
  qty: { type: String, required: false },
  bought: { type: Boolean, default: false }
})

module.exports = mongoose.model('ShoppingItem', shoppingItemSchema);
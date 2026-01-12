const express = require('express');
const {
  getEvents,
  createEvent,
  editEvent,
  deleteEvent
} = require('./controller');

const router = express.Router();

router.get('/events', getEvents);
router.post('/events', createEvent);
router.patch('/events/:id', editEvent);
router.delete('/events/:id', deleteEvent);

module.exports = router;

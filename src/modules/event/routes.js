const express = require('express');
const {
  getEvents,
  getEventById,
  createEvent,
  editEvent,
  deleteEvent,
  getEventCounts,
} = require('./controller');

const router = express.Router();

router.get('/events', getEvents);
router.get('/events/:id', getEventById);
router.get('/events/:id/counts', getEventCounts);
router.post('/events', createEvent);
router.patch('/events/:id', editEvent);
router.delete('/events/:id', deleteEvent);

module.exports = router;

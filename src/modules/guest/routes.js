const express = require('express');
const {
  getGuests,
  createGuest,
  editGuest,
  deleteGuest
} = require('./controller');

const router = express.Router();

router.get('/events/:eventId/guests', getGuests);
router.post('/events/:eventId/guests', createGuest);
router.patch('/events/:eventId/guests/:id', editGuest);
router.delete('/events/:eventId/guests/:id', deleteGuest);

module.exports = router;
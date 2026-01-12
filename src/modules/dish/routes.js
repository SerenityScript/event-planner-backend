const express = require('express');
const {
  getDishes,
  createDish,
  editDish,
  deleteDish
} = require('./controller');

const router = express.Router();

router.get('/events/:eventId/dishes', getDishes);
router.post('/events/:eventId/dishes', createDish);
router.patch('/events/:eventId/dishes/:id', editDish);
router.delete('/events/:eventId/dishes/:id', deleteDish);

module.exports = router;
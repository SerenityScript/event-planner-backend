const express = require('express');
const {
  getShoppingItems,
  createShoppingItem,
  editShoppingItem,
  deleteShoppingItem
} = require('./controller');

const router = express.Router();

router.get('/events/:eventId/shopping-items', getShoppingItems);
router.post('/events/:eventId/shopping-items', createShoppingItem);
router.patch('/events/:eventId/shopping-items/:id', editShoppingItem);
router.delete('/events/:eventId/shopping-items/:id', deleteShoppingItem);

module.exports = router;
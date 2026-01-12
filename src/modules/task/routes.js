const express = require('express');
const {
  getTasks,
  createTask,
  editTask,
  deleteTask
} = require('./controller');

const router = express.Router();

router.get('/events/:eventId/tasks', getTasks);
router.post('/events/:eventId/tasks', createTask);
router.patch('/events/:eventId/tasks/:id', editTask);
router.delete('/events/:eventId/tasks/:id', deleteTask);

module.exports = router;

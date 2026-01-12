const Task = require('./model');

const getTasks = async (req, res) => {
  try {
    const { eventId } = req.params;

    const tasks = await Task.find({ eventId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: 'Error by getting tasks',
      error: error.message
    });
  }
};

const createTask = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { title, done } = req.body;

    const newTask = await Task.create({ eventId, title, done });

    res.status(201).json({
      message: 'Task created',
      task: newTask
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error at creating task',
      error: error.message
    });
  }
};

const editTask = async (req, res) => {
  try {
    const { eventId, id } = req.params;
    const { title, done } = req.body;

    const updated = await Task.findOneAndUpdate(
      { _id: id, eventId },
      { ...(title !== undefined ? { title } : {}), ...(done !== undefined ? { done } : {}) },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({
      message: 'Task updated',
      task: updated
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error at task editing',
      error: error.message
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { eventId, id } = req.params;

    const deleted = await Task.findOneAndDelete({ _id: id, eventId });
    if (!deleted) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({
      message: 'Error at task deleting',
      error: error.message
    });
  }
};

module.exports = {
  getTasks,
  createTask,
  editTask,
  deleteTask,
};
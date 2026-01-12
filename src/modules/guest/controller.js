const Guest = require('./model');

const getGuests = async (req, res) => {
  try {
    const { eventId } = req.params;

    const guests = await Guest.find({ eventId });
    res.status(200).json(guests);
  } catch (error) {
    res.status(500).json({
      message: 'Error by getting guests',
      error: error.message
    });
  }
};

const createGuest = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { name, status } = req.body;

    const payload = { eventId, name };
    if (status !== undefined) payload.status = status;

    const newGuest = await Guest.create(payload);

    res.status(201).json({
      message: 'Guest created',
      guest: newGuest
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error at creating Guest',
      error: error.message
    });
  }
};

const editGuest = async (req, res) => {
  try {
    const { eventId, id } = req.params;
    const { name, status } = req.body;

    const updated = await Guest.findOneAndUpdate(
      { _id: id, eventId },
      { ...(name !== undefined ? { name } : {}), ...(status !== undefined ? { status } : {}) },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Guest not found' });
    }

    res.status(200).json({
      message: 'Guest updated',
      guest: updated
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error at Guest editing',
      error: error.message
    });
  }
};

const deleteGuest = async (req, res) => {
  try {
    const { eventId, id } = req.params;

    const deleted = await Guest.findOneAndDelete({ _id: id, eventId });
    if (!deleted) {
      return res.status(404).json({ message: 'Guest not found' });
    }
    res.status(200).json({ message: 'Guest deleted' });
  } catch (error) {
    res.status(500).json({
      message: 'Error at Guest deleting',
      error: error.message
    });
  }
};

module.exports = {
  getGuests,
  createGuest,
  editGuest,
  deleteGuest,
};
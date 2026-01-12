const Event = require('./model');

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: 'Error by getting events',
      error: error.message
    });
  }
};

const createEvent = async (req, res) => {
  try {
    const { name, date, time, location } = req.body;

    const newEvent = await Event.create({ name, date, time, location });

    res.status(201).json({
      message: 'Event created',
      event: newEvent
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error at creating Event',
      error: error.message
    });
  }
};

const editEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, time, location } = req.body;

    const updated = await Event.findByIdAndUpdate(
      id,
      {
        ...(name !== undefined ? { name } : {}),
        ...(date !== undefined ? { date } : {}),
        ...(time !== undefined ? { time } : {}),
        ...(location !== undefined ? { location } : {})
      },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({
      message: 'Event updated',
      event: updated
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error at Event editing',
      error: error.message
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Event.findByIdAndDelete( id );
    if (!deleted) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({
      message: 'Error at Event deleting',
      error: error.message
    });
  }
};

module.exports = {
  getEvents,
  createEvent,
  editEvent,
  deleteEvent,
};
const Dish = require('./model');

const getDishes = async (req, res) => {
  try {
    const { eventId } = req.params;

    const dishes = await Dish.find({ eventId });
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({
      message: 'Error by getting dishes',
      error: error.message
    });
  }
};

const createDish = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { name, responsible, note } = req.body;

    const payload = { eventId, name };
    if (note !== undefined) payload.note = note;
    if (responsible !== undefined) payload.responsible = responsible;

    const newDish = await Dish.create(payload);

    res.status(201).json({
      message: 'Dish created',
      dish: newDish
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error at creating Dish',
      error: error.message
    });
  }
};

const editDish = async (req, res) => {
  try {
    const { eventId, id } = req.params;
    const { name, responsible, note } = req.body;

    const updated = await Dish.findOneAndUpdate(
      { _id: id, eventId },
      {
        ...(name !== undefined ? { name } : {}),
        ...(responsible !== undefined ? { responsible } : {}),
        ...(note !== undefined ? { note } : {})
      },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Dish not found' });
    }

    res.status(200).json({
      message: 'Dish updated',
      dish: updated
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error at Dish editing',
      error: error.message
    });
  }
};

const deleteDish = async (req, res) => {
  try {
    const { eventId, id } = req.params;

    const deleted = await Dish.findOneAndDelete({ _id: id, eventId });
    if (!deleted) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    res.status(200).json({ message: 'Dish deleted' });
  } catch (error) {
    res.status(500).json({
      message: 'Error at Dish deleting',
      error: error.message
    });
  }
};

module.exports = {
  getDishes,
  createDish,
  editDish,
  deleteDish,
};
const ShoppingItem = require('./model');

const getShoppingItems = async (req, res) => {
  try {
    const { eventId } = req.params;

    const shoppingItems = await ShoppingItem.find({ eventId });
    res.status(200).json(shoppingItems);
  } catch (error) {
    res.status(500).json({
      message: 'Error by getting ShoppingItem',
      error: error.message
    });
  }
};

const createShoppingItem = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { name, category, qty, bought } = req.body;

    const payload = { eventId, name };
    if (category !== undefined) payload.category = category;
    if (qty !== undefined) payload.qty = qty;
    if (bought !== undefined) payload.bought = bought;

    const newShoppingItem = await ShoppingItem.create(payload);

    res.status(201).json({
      message: 'ShoppingItem created',
      shoppingItem: newShoppingItem
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error at creating ShoppingItem',
      error: error.message
    });
  }
};

const editShoppingItem = async (req, res) => {
  try {
    const { eventId, id } = req.params;
    const { name, category, qty, bought } = req.body;

    const updated = await ShoppingItem.findOneAndUpdate(
      { _id: id, eventId },
      {
        ...(name !== undefined ? { name } : {}),
        ...(category !== undefined ? { category } : {}),
        ...(qty !== undefined ? { qty } : {}),
        ...(bought !== undefined ? { bought } : {})
      },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'ShoppingItem not found' });
    }

    res.status(200).json({
      message: 'ShoppingItem updated',
      shoppingItem: updated
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error at ShoppingItem editing',
      error: error.message
    });
  }
};

const deleteShoppingItem = async (req, res) => {
  try {
    const { eventId, id } = req.params;

    const deleted = await ShoppingItem.findOneAndDelete({ _id: id, eventId });
    if (!deleted) {
      return res.status(404).json({ message: 'ShoppingItem not found' });
    }
    res.status(200).json({ message: 'ShoppingItem deleted' });
  } catch (error) {
    res.status(500).json({
      message: 'Error at ShoppingItem deleting',
      error: error.message
    });
  }
};

module.exports = {
  getShoppingItems,
  createShoppingItem,
  editShoppingItem,
  deleteShoppingItem,
};
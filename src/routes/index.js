const express = require('express');

const eventRoutes = require('../modules/event/routes');

const taskRoutes = require('../modules/task/routes');
const guestRoutes = require('../modules/guest/routes');
const dishRoutes = require('../modules/dish/routes');
const shoppingRoutes = require('../modules/shopping/routes');

const router = express.Router();

router.get('/health', (_req, res) => res.status(200).send('OK'));

router.use(eventRoutes);

router.use(taskRoutes);
router.use(guestRoutes);
router.use(dishRoutes);
router.use(shoppingRoutes);



module.exports = router;

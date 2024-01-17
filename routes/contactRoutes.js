const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.index).post('/', contactController.store);
router.get('/:id', contactController.show).put('/:id', contactController.update).delete('/:id',contactController.destroy);

module.exports = router
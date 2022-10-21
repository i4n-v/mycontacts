const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();

// root
router.get('/', (request, response) => response.send('Hello world'));

// contact
router.get('/contacts', ContactController.index);

module.exports = router;

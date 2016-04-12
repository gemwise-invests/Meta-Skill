'use strict';

import * as auth from '../../auth/auth.service';

var express = require('express');
var controller = require('./action.controller');

var router = express.Router();

//TODO last move
router.get('/move', controller.index);
//TODO registered user
router.post('/move',/* auth.isAuthenticated(), */controller.move);

//router.post('/', controller.create);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);

module.exports = router;

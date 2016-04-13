'use strict';

import * as auth from '../../auth/auth.service'

const express = require('express')
const controller = require('./action.controller')

let router = express.Router()

//TODO registered user
router.get('/move',/* auth.isAuthenticated(), */controller.findLastMove)
router.post('/move',/* auth.isAuthenticated(), */controller.move)
router.get('/status', controller.status)

module.exports = router

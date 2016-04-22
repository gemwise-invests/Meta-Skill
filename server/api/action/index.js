'use strict'

import * as auth from '../../auth/auth.service'

const express = require('express')
const controller = require('./action.controller')

let router = express.Router()

router.get('/move', auth.isAuthenticated(), controller.findLastMove)
router.post('/move', auth.isAuthenticated(), controller.move)
router.post('/attack', auth.isAuthenticated(), controller.attack)

module.exports = router

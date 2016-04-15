'use strict'

import * as auth from '../../auth/auth.service'

const express = require('express')
const controller = require('./status.controller')

let router = express.Router()

router.get('/', auth.isAuthenticated(), controller.myStatus)

module.exports = router

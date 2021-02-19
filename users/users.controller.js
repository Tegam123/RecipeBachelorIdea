const express = require('express');
const router = express.Router();


/// ROUTES ///
router.post('/authenticate', authenticate);
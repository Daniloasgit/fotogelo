const express = require('express');
const router = express.Router();
const controller = require('/kkkkkk');
router.get('/', controller.getAllTransactions);
module.exports = router;

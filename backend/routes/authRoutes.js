const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// router.post('/login', authController.login);
router.get('/', (req, res) => {
    res.send("Auth route is working!");
  });
  
  router.post('/login', authController.login);

module.exports = router;

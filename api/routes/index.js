const express = require('express');
const router = express.Router();
const app = require(`../app`);

router.get('/api/titanic', (req, res, next) => {
    console.log("params:", req.params);
});

module.exports = router;

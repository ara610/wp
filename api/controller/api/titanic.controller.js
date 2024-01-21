const express = require('express');
const router = express.Router();
const appRoot = require('app-root-path');
const path = appRoot.path;
const app = require(`${path}/app`);
const TitanicService = require(`${path}/service/titanic.service`);

router.get('/api/titanic', async (req, res, next) => {
    let titanicService = new TitanicService();
    console.log("_self:", req._self);
    let data = await titanicService.getAllTitanic();

    res.status(200).json({
        data,
    });
});

module.exports = router;

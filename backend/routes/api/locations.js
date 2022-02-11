const express = require("express");
const asyncHandler = require("express-async-handler");
// const { route } = require(".");

const { Location, Image } = require('../../db/models');

const router = express.Router();


//TODO: Custom Validators **********************


router.get('/', asyncHandler(async (req, res) => {
        const location = await Location.findAll({include: [
        {model: Image}
    ]}); 
        return res.json(location);
    })
);

router.get('/:id', asyncHandler(async (req, res) => {
    const location = await Location.findByPk(req.params.id,{include: Image});
    return res.json(location);
}))


//TODO: POST






//TODO: PUT




// TODO: DELETE




module.exports = router;
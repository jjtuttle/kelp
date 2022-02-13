const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const csrf = require("csurf");
const { Location, Image, User } = require('../../db/models');
const router = express.Router();

const csrfProtection = csrf({ cookie: true });



// Locations
router.get('/', asyncHandler(async (req, res) => {
        const locations = await Location.findAll({include: [{model: Image}, {model:User} ]}); 
        
        if(locations || locations.length) {
            return res.json({locations});}
        else res.json({locations: {message: 'Error in retrieving locations.'}});

        
    }) 
);

// Location
router.get('/:id', asyncHandler(async (req, res) => {
    const location = await Location.findByPk(req.params.id,{include: [
        {model: Image}, {model:User},
    ]});
    
    if(location || location.length) {
        return res.json({location});
    }
    else res.json({location: {message: 'Error in retrieving locations.'}});
}))


//TODO: POST
router.post('/', csrfProtection, asyncHandler(async(req, res) => {
    const location = await Location.create(req.body);
    const image = await Image.create({
        url: req.body.image.url,
        locationId: location.id
    });
    location.dataValues.Images = [image];
    return res.json(location);
}));


//TODO: PUT
router.put('/:id', csrfProtection, asyncHandler(async (req, res) => {
    const locationId = Number(req.params.id);
    const imageUrl = req.body.image.url;
    const image = await Image.findByPk(req.params.id);
    const location = await Location.finsByPk(locationId);
    const newUrlImage = {
        id: image.id,
        locationId: location.id,
        url: req.body.image.url
    };
    const currentImage = await image.update(newUrlImage);
    const updatedLocation = await location.update(req.body);
    updatedLocation.dataValues.Images = currentImage;

    return res.json(updatedLocation);
}));


// TODO: DELETE
// Delete
router.delete('/:id', asyncHandler(async (req, res) => {
    const locationId = await Location.deleteLocation(req.params.id);
    return res.json({locationId});
    // const locationId = Number;
}));



module.exports = router;
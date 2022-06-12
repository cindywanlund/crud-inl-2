const asyncHandler = require('express-async-handler')

const Dog = require('../models/dogModel')

// @desc  Get entries for all dogs
// @route GET /api/dogs
// @access Private
const getDogs = asyncHandler(async (req, res) => { // async is used since mongoose is sending back a promise
    const dogs = await Dog.find()
    res.status(200).json(dogs)
})

// @desc  Set a dog entry
// @route POST /api/dogs
// @access Private
const setDog = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        throw new Error('Dog name should be specified');
    }
    const dog = await Dog.create({
        name: req.body.name,
        birthDate: req.body.birthDate
    })
    res.status(200).json(dog)
})

// @desc  Update a dog entry
// @route PUT /api/dogs/:id
// @access Private
const updateDog = asyncHandler(async (req, res) => {

    const dog = await Dog.findById(req.params.id)
    if (!dog) {
        res.status(400);
        throw new Error('No dog found.');
    }

    const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json(updatedDog)
})

// @desc  DELETE a dog entry
// @route DELETE /api/dogs/:id
// @access Private
const deleteDog = asyncHandler(async (req, res) => {
    const dog = await Dog.findById(req.params.id)

    if (!dog) {
        res.status(400);
        throw new Error('No dog found.');
    }
    await dog.remove();
    res.status(200).json({id: req.params.id});
})

module.exports = {
    getDogs, setDog, updateDog, deleteDog
}
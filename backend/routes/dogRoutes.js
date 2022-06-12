const express = require('express')

// use the router portion of express
const router = express.Router()

const { getDogs, setDog, updateDog, deleteDog } = require('../controllers/dogController');



router.route('/').get(getDogs).post(setDog);
router.route('/:id').put(updateDog).delete(deleteDog);


module.exports=router
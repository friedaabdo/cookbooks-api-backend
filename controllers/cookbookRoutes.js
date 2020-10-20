const express = require('express')
const router = express.Router()
const mongoose = require("../db/connection")

// Require the Cookbook controller.
const Cookbook = require('../models/Cookbook')

// Write the route to list all cookbooks
router.get('/', async (req, res) => {
    const cookbook = await Cookbook.find({})
    res.json({status: 200, data: cookbook})
})

// Write the route to get cookbook by title
router.get('/:id', async (req,res) => {
    console.log('req.params.title',req.params)
    const cookbook = await Cookbook.findById({_id: req.params.id})
    res.json({status: 200, data: cookbook})
})

// Write the route to get cookbook by year published **
router.get('/yearPublished/:year', async (req,res) => {
    const cookbook = await Cookbook.find({yearPublished: req.params.year})
    res.json({status: 200, data: cookbook})
})

// Write the route to create a cookbook
router.post('/', async (req,res) => {
    const cookbook = await Cookbook.create(req.body)
    res.json({status: 200, data: cookbook})
})

// Write the route to update a cookbook
router.put('/:id', async (req,res) => {
    const cookbook = await Cookbook.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({status: 200, msg:'cookbook updated',data: cookbook})
})

// Write the route to delete the cookbook by title
router.delete('/:title', async (req,res) => {
    const cookbook = await Cookbook.deleteOne({title: req.params.title})
    res.json({status: 200, msg:'cookbook deleted',data: cookbook})
})


module.exports = router;
const express = require('express')
const router = express.Router()
const Asset = require('../models/asset')

//getting all
router.get('/', async (req, res) =>{
    try {
        const assets = await Asset.find()
        res.json(assets)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
//getting one
router.get('/:id', getAsset, (req, res) =>{
    res.send(res.asset)
})
//creating one
router.post('/', async (req, res) =>{
    const asset = new Asset({
        name: req.body.name,
        subscribeToChannel: req.body.subscribeToChannel
    })
    try {
        const newAsset = await asset.save()
        res.status(201).json(newAsset)
    }   catch (err) {
            res.status(400).json({ message: err.message })
    }
})

//updating one
router.patch('/:id',(request, res) =>{
    res.send('updating one')
})

//deleting one
router.delete('/:id', getAsset, async (req, res) =>{
    try {
        await res.asset.deleteOne()
        res.json({ message: 'Deleted Asset' })
    }   catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getAsset(req, res, next) {
    let asset
    try {
        asset = await Asset.findById(req.params.id)
        if (asset == null) {
            return res.status(404).json({ message: 'Cannot find subscriber'})
        }
    }   catch (error){
            return res.status(500).json({ message: error.message })
    }

    res.asset = asset
    next()
}

module.exports = router
const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
    res.json({ msg: "get all workouts"})
})


router.get('/:id', (req, res)=>{
    const id = req.query.id
    res.json({ id: id })
})


router.post('/', (req, res)=>{
    res.json({ msg: "post workout"})
})


router.delete('/:id', (req, res)=>{
    res.json({ msg: "delete workout"})
})


router.patch('/:id', (req, res)=>{
    res.json({ msg: "update workout"})
})

module.exports = router
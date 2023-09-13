const express = require('express')
const router = express.Router();
const Person = require('../models/person')

// Get all user
router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        res.json(persons)
    } catch (err) {
        res.send('Error' + err)
    }
})


// Get a user by ID
router.get('/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        res.json(person)
    } catch (err) {
        res.send('Error' + err)
    }
})


// Post a new user
router.post('/', async (req, res) => {
    const person = new Person({
        name: req.body.name
    })

    try {
        const a1 = await person.save()
        res.json(a1)
    } catch (err) {
        res.send('Error ' + err)
    }
})



// Edit User data
router.patch('/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id)
        if (req.body.name != null) {
            person.name = req.body.name
            const a1 = await person.save()
        }
        res.send("Succesfully changed the data")
    } catch (err) {
        res.send('Err: ' + err)
    }
})


// Delete a data
router.delete('/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        await person.deleteOne();
        res.json({ message: 'Person deleted successfully' });
    } catch (err) {
        res.send('Err: ' + err)
    }
})


module.exports = router;

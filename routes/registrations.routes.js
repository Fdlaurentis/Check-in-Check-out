const express = require('express')

const {
    getAllRegistrations,    
    getRegistrations,
    createRegistrations,
    updateRegistrations,
    deleteRegistrations
} = require('../controllers/registrations.controler')

const registrationsRouter = express.Router()

registrationsRouter.get('/', getAllRegistrations)

registrationsRouter.get('/:id', getRegistrations)

registrationsRouter.post('/', createRegistrations)

registrationsRouter.patch('/:id', updateRegistrations)

registrationsRouter.delete('/:id', deleteRegistrations)

module.exports = { registrationsRouter }
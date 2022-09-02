const { Records } = require('../models/registrations.model')

const getAllRegistrations = async (req, res) =>{
    try {
        const registrations = await Records.findAll()

        res.status(200).json({
            status: 'success',
            data: {
                registrations
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const getRegistrations = async (req, res) =>{
    try {
        const { id } = req.params
        const registrations = await Records.findOne({ where: { id } })

        if (!registrations){
            return res.status(404).json({
                status: 'error',
                message: 'record not found'
            })
        }

        res.status(200).json({
            status: 'success',
            data:{
                registrations
            }
        })

    } catch (error) {
        console.log(error);
    }
}

const createRegistrations = async (req, res) =>{
    try {
        const { id, entranceTime,exitTime } = req.body

        const newrecord = await Records.create({ id, entranceTime, exitTime })

        res.status(201).json({
            status: 'success',
            data: { newrecord }
        })

    } catch (error) {
        console.log(error);
    }
}

const updateRegistrations = async (req, res) =>{
    try {
        const { id } = req.params
        const { exitTime } = req.body

        const record = await Records.findOne({ where: { id } })

        if( !record ) {
            return res.status(404).json({
                status: 'error',
                message: 'Record not found'
            })
        }

        if ( exitTime.toUpperCase() !== 'CANCELLED' ){
            await record.update( { exitTime, status: 'OUT' } )    
            res.status(201).json({
                status: 'success',
                data: { record }
            })
        }else{
            await record.update( { status: 'CANCELLED' } )    
            res.status(201).json({
                status: 'success',
                data: { record }
            })
        }        
        
    } catch (error) {
        console.log(error);
    }
}

const deleteRegistrations = async (req, res) =>{
    try {
        const { id } = req.params
        
        const record = await Records.findOne({ where: { id } })

        if( !record ) {
            return res.status(404).json({
                status: 'error',
                message: 'Record not found'
            })
        }

        await record.update( { status: 'deleted' } )    

        res.status(201).json({
            status: 'success'
        })
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllRegistrations,
    getRegistrations,
    createRegistrations,
    updateRegistrations,
    deleteRegistrations,    
}
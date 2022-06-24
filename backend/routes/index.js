const route = require('express').Router();

route.get('/',(req,res) => {
    res.status(200).json({
        message:"Dashboard Success"
    })
})

const userRoute = require('./user')
const jobRoute = require('./job')

route.use('/users',userRoute)
route.use('/jobs',jobRoute)


module.exports = route;
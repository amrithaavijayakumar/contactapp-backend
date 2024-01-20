//import express
const express=require('express')

//import cors
const cors=require('cors')
const logic=require('./Services/logics')
//create an application using express
const contactServer=express()

//using cors to connect frontend port
contactServer.use(cors({
    origin:"http://localhost:3000"
}))

//create a middleware for parsing json data
contactServer.use(express.json())

//define a portnumber
contactServer.listen(8000,()=>{
    console.log('contactServer listening on port 8000');
})

//api call for get all employee details
contactServer.get('/get-all-contacts',(req,res)=>{

    logic.getAllContacts().then((response)=>{
        res.status(response.statusCode).json(response)
    })

})

//api call for post add

contactServer.post('/add-contact',(req,res)=>{
    logic.AddContacts(req.body.id,req.body.name,req.body.address,req.body.phone,req.body.email,req.body.username,req.body.password).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})
//api call for delete
contactServer.delete('/delete-contact/:id',(req,res)=>{
    logic.deleteContact(req.params.id).then((response)=>{
            res.status(response.statusCode).json(response)
    })
})
//api for view
contactServer.get('/get-a-contact/:id',(req,res)=>{

    logic.getaContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })

})
//api for update
contactServer.post('/update-a-contact/:id',(req,res)=>{
    logic.updateContact(req.params.id,req.body.name,req.body.address,req.body.phone,req.body.email).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

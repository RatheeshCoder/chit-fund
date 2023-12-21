const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./model/user')

const app = express()
app.use(cors())
app.use(express.json())
// Connect to MongoDB database
mongoose.connect('mongodb+srv://ratheesh:ratheesh@cluster0.fjqeoph.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB connected'))

app.post('/Login',(req,res)=>{
    const {email, password} = req.body;
    UserModel.findOne({email:email})
        .then(User => {
            if(User){
                if(password === User.password){
                    res.json("Success")
                }else{
                    res.json({error:'Password is incorrect'})
                }
            }else{
                res.json({error:'User does not exist'})
            }
        })
        .catch(err => res.json(err))
})

app.post('/signup',(req,res)=>{
    UserModel.create(req.body)
        .then(User => res.json(User))
        .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log('Server is running on port 3001')
})
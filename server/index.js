
import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv";
import User from "./models/user.js"
import cors from "cors"
import bodyParser from "body-parser"




const app = express();

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


dotenv.config()


app.post("/api/register", async (req, res) => {
    const { name, email, password } = req.body
    const newUser = new User({ name, email, password })

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.json(error.message);
    }

})






app.put('/api/update/:id', async (req, res) => {
    const { id } = req.params
    const { name, email, password } = req.body

    try {
        const updateedUser = await User.findByIdAndUpdate(id, { $set: { name, email, password } }, { new: true })
    } catch (error) {
        res.json(error.message)
    }
})

app.delete('/api/delete/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(201).json("deleted")
    } catch (error) {
        res.json(error.message)
    }

})

app.get('/:id', async(req,res)=> {
    const { id } = req.params
    try{
        const getId = await User.findById(id)
        res.json(getId)
    }catch(error) {
        console.log(error.message);
    }
})


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to database');
    } catch (error) {
        const { status, message } = error;
        console.log(status, message)
    }
}


app.get("/", async (req, res) => {
    try {
        const savedUser = await User.find();

        // savedUser

        res.status(200).json(savedUser);
        console.log(savedUser)
    } catch (error) {
        res.json(error.message);
    }
})





app.listen(process.env.PORT, () => {
    connect()
    console.log(`Server running... ${process.env.PORT} `)
}
)
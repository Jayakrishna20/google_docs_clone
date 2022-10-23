const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const authRouter = require("./routes/auth")
const documentRouter = require("./routes/document")

const PORT = process.env.PORT | 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(authRouter)
app.use(documentRouter)

const DB = "mongodb+srv://jayakrishnan:YjLxXgc3Lmp5PwvW@cluster0.nnchejq.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB).then(() => {
    console.log('Connection successful!');
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
})
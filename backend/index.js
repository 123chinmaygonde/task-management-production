const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const connectDB = require("./Db/ConnectDb")
const router = require('./controller/Routes')
const routesforuser = require("./controller/RoutesForUser")
const cookieparser = require("cookie-parser")

const app = express()
connectDB()

app.use(cors({
    origin: 'http://localhost:5173', // Your frontend origin
    credentials: true // Allow credentials (cookies)
}));
app.use(express.json())
app.use(cookieparser())

app.use('/api/tasks',router)
app.use('/api/user',routesforuser)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})

import express from 'express'
import dotenv from "dotenv"

import authRoutes from './routes/auth.routes.js'

import connectTOMongoDB from "./db/connectToMongoDB.js"

dotenv.config()


const app =express()
const PORT = process.env.PORT


app.use(express.json())

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    connectTOMongoDB();
    console.log(`the app is listening on port = ${PORT}`)
})
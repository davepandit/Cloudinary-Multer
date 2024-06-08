import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import path from 'path'
import uploadRouter from './routes/uploadRoutes.js'

const app = express()

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

const PORT = process.env.PORT

export const __dirname = path.resolve()
const __random = path.join()

app.get('/', (req , res)=>{
    res.send('Hello')
})

//upload image
app.use('/api', uploadRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
    console.log('The present absolute path is :', path.resolve(__dirname, 'public/images'))
    console.log('The relative path is :', path.join(__random, 'public/images'))
})
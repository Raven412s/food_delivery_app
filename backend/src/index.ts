import express, {Request,Response} from "express"
import cors from "cors"
import "dotenv/config" 

const app = express()
app.use( express.json())
app.use(cors())

app.get("/test", async (req: Request, res: Response)=>{
     res.json({message: "Hello!"})
})

app.listen(8500, ()=>{
    console.log("server started on https://localhost/8500")
})
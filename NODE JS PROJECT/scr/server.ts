import express from "express";
import notesRouter from "./routes/notes"

const app = express()
const PORT = 3000

app.use(express.json())
app.use("/notes", notesRouter)

app.listen(PORT, () =>{
    console.log(`server is running on http://localhost:${PORT}`)
})
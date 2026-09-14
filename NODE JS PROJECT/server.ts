import express from "express"
import type {Request, Response} from "express"
import { error } from "node:console"

const app  = express()
const PORT = 3000

app.use(express.json())

interface Note{
    id: number,
    text: string
}

let notes: Note[] = []
let nextId = 1

app.get("/notes", (req: Request, res: Response) => {
    res.json(notes)
})

app.post("/notes", (req: Request, res: Response ) => {
    const text: string = req.body.text
    const newNote: Note = {
        id: nextId++,
        text
    }
    notes.push(newNote)
    res.status(202).json(newNote)
})


// GET a single note by id
app.get("/notes/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id)
    const note = notes.find((n) => n.id === id)
  
    if (!note) {
      res.status(404).json({ error: "Note not found" })
      return
    }
  
    res.json(note)
})
  
// PUT — update an existing note
app.put("/notes/:id", (req: Request, res: Response) => {
const id: number = Number(req.params.id)
const note = notes.find((n) => n.id === id)

if (!note) {
    res.status(404).json({ error: "Note not found" })
    return
}

note.text = req.body.text
res.json(note)
})
  
// DELETE a note
app.delete("/notes/:id", (req: Request, res: Response) => {
const id: number = Number(req.params.id)
const index = notes.findIndex((n) => n.id === id)

if (index === -1) {
    res.status(404).json({ error: "Note not found" })
    return
}
  
notes.splice(index, 1)
res.status(204).send()
})

app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`)
})
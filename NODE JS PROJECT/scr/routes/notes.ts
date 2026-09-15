import express from "express"
import type {Response, Request} from "express"
import type {Note} from "../types"

const router = express.Router()

let notes: Note[] = []
let nextId = 1

router.get("/", (Req: Request, res: Response) =>{
    res.json(notes)
})

router.post("/", (req: Request, res:Response) =>{
    const text: string = req.body.text
    const newNote: Note = {
        id: nextId++,
        text
    }
    notes.push(newNote)
    res.status(201).json(newNote)
})

router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const note = notes.find((n) => n.id === id)
  if (!note) {
    res.status(404).json({ error: "Note not found" })
    return
  }
  res.json(note)
})

router.put("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const note = notes.find((n) => n.id === id)
  if (!note) {
    res.status(404).json({ error: "Note not found" })
    return
  }
  note.text = req.body.text
  res.json(note)
})

router.delete("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const index = notes.findIndex((n) => n.id === id)
  if (index === -1) {
    res.status(404).json({ error: "Note not found" })
    return
  }
  notes.splice(index, 1)
  res.status(204).send()
})

export default router



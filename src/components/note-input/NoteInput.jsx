import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addNote, modifyNote } from "../../redux/noteSlice"

const NoteInput = ({ noteId, initialNote, onSave }) => {
  // On communique avec Redux grâce à dispatch
  const dispatch = useDispatch()
  
  const [newNote, setNewNote] = useState(initialNote)
  
  // On met à jour l'état lorsque la note initiale change
  useEffect(() => {
    setNewNote(initialNote)
  }, [initialNote])

  const handleNoteChange = (e) => {
    // L'état est mis à jour à chaque changement de texte
    setNewNote(e.target.value)
  }

  const handleSaveNote = (e) => {
    e.preventDefault()

    if (noteId) {
        // Si une noteId existe, on la modifie
        dispatch(modifyNote({ id: noteId, text: newNote }))
      } else {
        // Sinon, on ajoute une nouvelle note
        dispatch(addNote(newNote))
      }

       // Pour enregistrer la note
       if (onSave) onSave(newNote)
  }

  return (
    <form onSubmit={handleSaveNote}>
      <input 
        type="text" 
        value={newNote} 
        onChange={handleNoteChange} 
        placeholder="Entrez votre note"
      />
      <button type="submit" className="button">Save</button>
    </form>
  )
}

NoteInput.propTypes = {
  noteId: PropTypes.string,
  initialNote: PropTypes.string,
  onSave: PropTypes.string,
}

export default NoteInput

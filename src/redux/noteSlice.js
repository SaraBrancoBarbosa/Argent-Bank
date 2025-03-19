import { createSlice } from "@reduxjs/toolkit"

// Tranche de mon état global qui concerne les notes
const noteSlice = createSlice({
    // Le nom de cette partie d'état
    name: "notes",
    // Au départ, on n'a aucune note
    initialState: [],
    // Réducteur : un ensemble d'actions possibles avec notre état.
    // Une action, c'est un objet avec 2 infos : quelle est la tâche (type), et les données (payload) dont j'ai besoin
    reducers: {
        addNote: (state, action) => {
            const newNote = {
                id: Date.now(),
                text: action.payload
            }

            // Ce state-là est déjà une copie, donc on ne touche pas l'état initial !
            state.push(newNote)
        },
        modifyNote: (state, action) => {
            // Lorsqu'on clique sur l'icône, l'input s'ouvre sur la note qu'on a ajouté.
            const noteIndex  = state.findIndex((note) => note.id === action.payload.id)
            if (noteIndex  !== -1) {
                state[noteIndex ].text = action.payload.text
            }
        }
    }
})

export const { addNote, modifyNote } = noteSlice.actions

export default noteSlice


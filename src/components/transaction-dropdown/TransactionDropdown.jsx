import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react"
import "./transactionDropdown.css"
import NoteInput from "../note-input/NoteInput"
import SelectDropdown from "../select-dropdown/SelectDropdown"

function TransactionDropdown({ date, description, amount, balance, type, category, categoryId, note, noteId }) {

  // To manage the dropdown display
  const [visible, setVisible] = useState(false)
  const [height, setHeight] = useState("0px")
  const parentRef = useRef()

  const toggle = () => {
    //return !current
    setVisible(current => !current)
  }

  // Pour éditer la catégorie
  const [modifyCategory, setModifyCategory] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(category)

  // Pour gérer la fin de l'édition de la catégorie (on "ferme" le dropdown et l'icône crayon revient)
  const handleCategoryChange = (newCategory) => {
    setCurrentCategory(newCategory)
    setModifyCategory(false)
  }

  // Pour éditer la note
  const [modifyNote, setModifyNote] = useState(false)
  // Avec l'état local, on suit la note (actuelle)
  const [currentNote, setCurrentNote] = useState(note)

  const handleSaveNote = (newNote) => {
    setCurrentNote(newNote)
    setModifyNote(false)
  }

  useEffect (() => {
    if(!parentRef.current) return
    setHeight(visible ? parentRef.current.scrollHeight + "px" : "0px")
  },[visible, parentRef])

  return (

    <div className="dropdown">

      <div className="dropdown-content">
        <i 
          alt="Afficher ou cacher le texte"
          onClick={toggle}
          className={visible ? "fa fa-solid fa-chevron-up dropdown-icon-up" : "fa fa-solid fa-chevron-up dropdown-icon-down"}
        >  
        </i>
        <p className="dropdown-text">{date}</p>
        <p className="dropdown-text">{description}</p>
        <p className="dropdown-text">${amount}</p>
        <p className="dropdown-text">${balance}</p>
      </div>

      {/* Style and ref: to create a smooth animation with an adaptative height */}
      <div 
        className="text-parent" 
        ref={parentRef}
        style={{height}}
      >
        {/* The text slides smoothly */}
        <div 
          className="text"
          style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
        >
          <p className="text-children">Transaction Type: {type}</p>

          {/* Pour la sélection de catégorie */}
          <div className="text-children">
            Category: {modifyCategory ? (
              <SelectDropdown
                categoryId={categoryId}
                currentCategory={currentCategory}
                onCategoryChange={handleCategoryChange}
              />
            ) : (
              <>
                {currentCategory} 
                <i className="fa fa-solid fa-pencil text-children-icon" onClick={() => setModifyCategory(true)} />
              </>
            )}
          </div>

          {/* Pour la note */}
          <div className="text-children">
            Notes: {modifyNote ? (
              <NoteInput 
                noteId={noteId}
                // On passe la note actuelle au composant NoteInput
                initialNote={currentNote}
                // Avec la fonction de sauvegarde, on capture la nouvelle note
                onSave={handleSaveNote}
              />
            ) : (
              <>
                {/* On affiche la note actuelle */}
                {currentNote} 
                <i 
                  className="fa fa-solid fa-pencil text-children-icon"
                  onClick={() => setModifyNote(true)} 
                />
              </>
            )}
          </div>

        </div>
      </div>

    </div>    
  )
}

TransactionDropdown.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.string,
  balance: PropTypes.string,
  type: PropTypes.string,

  category: PropTypes.string,
  categoryId: PropTypes.number,

  note: PropTypes.string,
  noteId: PropTypes.number,
}

export default TransactionDropdown

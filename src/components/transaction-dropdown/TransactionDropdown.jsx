import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react"
import "./transactionDropdown.css"

function TransactionDropdown({ date, description, amount, balance, type }) {

  // To manage the dropdown display
  const [visible, setVisible] = useState(false)
  const [height, setHeight] = useState("0px")
  const parentRef = useRef()

  const toggle = () => {
    //return !current
    setVisible(current => !current)
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
          className={visible ? "fa fa-solid fa-chevron-up dropdown-icon-down" : "fa fa-solid fa-chevron-up dropdown-icon-up"}
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

          {/* Category selection */}
          <div className="text-children">
            Category: <i className="fa fa-solid fa-pencil text-children-icon" />
          </div>

          {/* Notes */}
          <div className="text-children">
            Notes: <i className="fa fa-solid fa-pencil text-children-icon" />
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
}

export default TransactionDropdown

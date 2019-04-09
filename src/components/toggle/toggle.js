import React from "react"
import "./toggle.scss"

const Toggle = ({ onToggle, ItemId }) => {
  return (
    <div className="toggle-container">
      <div className="switch-box">
        <input id={`switch-me${ItemId}`} type="checkbox" onClick={onToggle} />
        <label htmlFor={`switch-me${ItemId}`} className="option">
          <span className="active-state">RU</span>
          <i className="icon" />
          <span className="inactive-state">EN</span>
        </label>
      </div>
    </div>
  )
}

export default Toggle

import React from 'react'
import './Cardbody.css'
function Cardbody(props) {
    return (
        <div className="crdbdy">
          {props.children}
        </div>
    )
}

export default Cardbody

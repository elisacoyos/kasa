import React from 'react'
import "./Main.css";

function Main(props) {
    const children = props.children
  return (
    <div className='main'>{children}</div>
  )
}

export default Main
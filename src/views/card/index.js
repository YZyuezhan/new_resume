import React from 'react'

export default function Card (props) {
  const onSetDetails = (key) => {
    props.onSetDetails(key)
  }
  return (
    <div className={props.class}>
      <div className='active' onClick={() => onSetDetails(props.row.key)}>
        <i className={props.row.icon}></i>
        <h3>{props.row.label}</h3>
      </div>
    </div>
  )
}

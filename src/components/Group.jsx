import React from 'react'

export default function Group(props) {
  return (
    <div className='group'>
        <div className="title">{props.title}</div>
        <a href={props.id} className="item">{props.item_1}</a>
    </div>
  )
}

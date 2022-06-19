import React from 'react'
import data from '../data/books'

export default function Card(props) {
  return (
        <div className="card" id={props.data.id}>
            <div className="subcontent">
                <img src={props.data.images} alt="" />
                <a href={props.data.link} className="read" target="_Blank">Читать</a>
            </div>
            <div className="content">
                <div className="title">{props.data.title}<div className="add">+</div></div>
                <div className="subtitle">{props.data.cycle.name}<span className="number">({props.data.cycle.number})</span></div>
                <div className="author">{props.data.author}</div>
                <div className="discribe">{props.data.discribe}</div>
                <div className="menu">
                    <div className="comment">Комментировать</div>
                    <div className="more">...</div>
                </div>
            </div>
        </div>
  )
}

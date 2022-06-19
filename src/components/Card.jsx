import React from 'react'

export default function Card() {
  return (
        <div className="card">
            <div className="subcontent">
                <img src="" alt="" />
                <div className="read">Читать</div>
            </div>
            <div className="content">
                <div className="title">Срыв <div className="add">+</div></div>
                <div className="subtitle">Играть что бы жить <span className="number">(1)</span></div>
                <div className="author">Дмитрий Рус</div>
                <div className="discribe">Данная книга повествует нам про человека который попал в ммо игру с полным погружением. и пошел на срывДанная книга повествует нам про человека который попал в ммо игру с полным погружением. и пошел на срыв</div>
                <div className="menu">
                    <div className="comment">Комментировать</div>
                    <div className="more">...</div>
                </div>
            </div>
        </div>
  )
}

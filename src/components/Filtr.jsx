import React from 'react'

export default function Filtr() {
  return (
    <nav className="filtr">
        <div className="menu">
            <select name="" id="" className="items">
                <option value="">Жанр</option>
                <option value="">ЛитРПГ</option>
                <option value="">Фентези</option>
                <option value="">Попаданец</option>
            </select>
            <select name="" id="" className="items">
                <option value="">Сортировать по</option>
                <option value="">Дате написания</option>
                <option value="">Алфавиту</option>
                <option value="">Еще как-то</option>
            </select>
            <select name="" id="" className="items">
                <option value="">Сортировать по</option>
                <option value="">Дате написания</option>
                <option value="">Алфавиту</option>
                <option value="">Еще как-то</option>
            </select>
            <select name="" id="" className="items">
                <option value="">Сортировать по</option>
                <option value="">Дате написания</option>
                <option value="">Алфавиту</option>
                <option value="">Еще как-то</option>
            </select>
        </div>
        <div className="search">
            <input type="text" placeholder='Поиск...'/>
            <img src="./assets/icons/nav/search.svg" alt="" className="btn" />
        </div>
    </nav>
  )
}

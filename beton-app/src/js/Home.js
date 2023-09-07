import React from 'react'
import '../css/Home.css'
import iphone from '../img/iphone.jpeg'
import pizza1 from '../img/pizza1.jpeg'
import pizza2 from '../img/pizza2.jpeg'

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="baner">
            <div className="b-left">
                <div className="dum">
                <img className='ip' src={iphone} alt="" /></div>
                <div className="k-dum"></div>
            </div>
            <div className="orta">
                <h1><span>Купить бетон</span> также просто, <br />как заказать пиццу</h1>
                <p>Скачивай наше приложение!</p>
            </div>
            <div className="b-right">
                <img className='piz2' src={pizza2} alt="" />
                <img className='piz1' src={pizza1} alt="" />
            </div>
            <div className="dale"></div>
        </div>
      </div>
    </div>
  )
}

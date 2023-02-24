import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='ANPAN不動産で次の住まいを探す' subtitle='あなたの地元の都市にある新しい＆注目の物件を見つけてください。' />

          <form className='flex'>
            <div className='box'>
              <span>都市/通り</span>
              <input type='text' placeholder='位置' />
            </div>
            <div className='box'>
              <span>プロパティタイプ</span>
              <input type='text' placeholder='プロパティタイプ' />
            </div>
            <div className='box'>
              <span>価格帯</span>
              <input type='text' placeholder='価格帯' />
            </div>
            <div className='box'>
              <h4>フィルター</h4>
            </div>
            <button className='btn1' style={{backgroundColor: '#f6fa02',color:'black'}}>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero

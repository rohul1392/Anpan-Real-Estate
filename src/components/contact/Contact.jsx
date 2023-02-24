import React from "react"
import img from "../images/pricing.webp"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='お問い合わせ' title='ヘルプとフレンドリーなサポートを受ける' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>フォームに記入する</h4> <br />
            <div>
              <input type='text' placeholder='名前' />
              <input type='text' placeholder='Eメール' />
            </div>
            <input type='text' placeholder='主題' />
            <textarea cols='30' rows='10'></textarea>
            <button style={{backgroundColor:'#f6fa02',color:'black'}}>リクエストを送信</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact

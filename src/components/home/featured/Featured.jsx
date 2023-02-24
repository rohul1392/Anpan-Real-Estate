import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='注目の物件タイプ' subtitle='プロパティのすべてのタイプを検索します。' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured

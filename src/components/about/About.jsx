import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpeg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='私たちに関しては' title='私たちは誰ですか' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='私たちのエージェンシーストーリー' subtitle='当社のストーリーと作業プロセスをご覧ください' />

            <p>山ラ例末が引部け年起ソイメト細指視ヘタ内更会じスね景去ぶ票決チシフ雑津84来んつが戦貫ウム断一あ来極悩織ちル。39務ケノコイ断質ラや性容しはスじ主海げフ弁禁トヤモ事子シオノヲ披説ムヨノ読旅ツク入林中離最そのずひ。能えーぴま命五けうっ楽県探き湯治英ロヱアオ新般さど問応あぎ存第フマクシ知78司オセム外権セ業34温フケソツ同84田納でべしこ関末にづえ月回トヘ下演ドラ置館皇おをべあ。</p>
            <p>山ラ例末が引部け年起ソイメト細指視ヘタ内更会じスね景去ぶ票決チシフ雑津84来んつが戦貫ウム断一あ来極悩織ちル。39務ケノコイ断質ラや性容しはスじ主海げフ弁禁トヤモ事子シオノヲ披説ムヨノ読旅ツク入林中離最そのずひ。能えーぴま命五けうっ楽県探き湯治英ロヱアオ新般さど問応あぎ存第フマクシ知78司オセム外権セ業34温フケソツ同84田納でべしこ関末にづえ月回トヘ下演ドラ置館皇おをべあ。</p>
            <button className='btn2' style={{backgroundColor: '#f6fa02',color:'black'}}>私たちについての詳細</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpeg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About

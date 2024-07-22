import React from 'react'
import styles from './flow.module.scss'
import Image, { StaticImageData } from 'next/image'
import img1 from '../../../../../public/img/apply/1.webp'
import img2 from '../../../../../public/img/apply/2.webp'
import img3 from '../../../../../public/img/apply/3.webp'
import img4 from '../../../../../public/img/apply/4.webp'
import img5 from '../../../../../public/img/apply/5.webp'

import backImg from '../../../../../public/img/apply/flowBack.webp'
import nextImg from '../../../../../public/img/apply/next.webp'




function Flow() {

  const data: Array<{
    id: number
    serial: StaticImageData
    name: string
    desc: string
  }> = [
      {
        id: 1,
        serial: img1,
        name: '招生对象',
        desc: '面向全球招收高二，高三学生，年满16周岁无户籍国籍限制。'
      }, {
        id: 2,
        serial: img2,
        name: '入学要求',
        desc: '1、参加港澳名校直通车定向培养班需参加暑期强化培训且测试通过。<br/> 2、参加QS100名校直通车需通过测试。<br/> 3、参加国际艺术名校直通车需提交无色盲色弱的体检报告，以及相关的艺术作品。'
      }, {
        id: 3,
        serial: img3,
        name: '录取要求',
        desc: '通过入学英语测试，心理测试；(*当年高考英语120分、雅思5.5分、托福70分可免试入学；如果持有雅思6.0或托福80+免试入学且发2.8万奖学金每人。)'
      }, {
        id: 4,
        serial: img4,
        name: '报名材料',
        desc: '身份证复印件，在读证明或毕业证，一寸免冠照片4张。'
      }, {
        id: 5,
        serial: img5,
        name: '录取流程',
        desc: '提交材料——提交报名所需材料。<br/> 入学考试——材料审核通过后进行入学考试。<br/> 录取报到——符合条件的学生发放通知书，按规定时间进行报到。'
      },
    ]

  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>填写报名表 ——资格审核通过 ——入学测试 ——符合入学条件发放通知书</h3>
        </div>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li key={item.id}>
                  <div className={styles.icon}></div>
                  <div className={styles.nextLogo}>
                    <Image src={nextImg} alt=''></Image>
                  </div>
                  <div className={styles.card}>
                    <Image src={item.serial} alt=''></Image>
                    <div className={styles.card_desc}>
                      <h4>{item.name}</h4>
                      <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className={styles.backImg}>
        <Image src={backImg} alt=''></Image>
      </div>
    </section>
  )
}

export default Flow

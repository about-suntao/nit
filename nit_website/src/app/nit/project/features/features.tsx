import React from 'react'
import styles from './features.module.scss'
import Image from 'next/image'

import picture from '../../../../../public/img/nit/features.webp'
import star from '../../../../../public/img/nit/star.webp'


function Features() {

  const data = [
    {
      id: 1,
      title: '国内大学环境结合国际课程加持 顺利赴外留学',
    }, {
      id: 2,
      title: '科学规划 悉心指导 全周期留学方案制定',
    }, {
      id: 3,
      title: '浙大宁波理工学院资质设立专项A-Level考点',
    }, {
      id: 4,
      title: '学术英语课程 快速提升语言成绩',
    }, {
      id: 5,
      title: '学业合理安排 一体化教学管理',
    },
  ]

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={picture} alt=''></Image>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h2>项目特色</h2>
            <p>Project Features</p>
          </div>
          <ul>
            {
              data.map((item: any) => {
                return (
                  <li key={item.id}>
                    <Image src={star} alt=''></Image>
                    <p>{item.title}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features

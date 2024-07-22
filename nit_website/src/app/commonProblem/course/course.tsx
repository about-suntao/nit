import React from 'react'
import styles from './course.module.scss'

function Course() {

  type dataType = {
    id: number,
    title: string,
    titleEn: string
  }

  const data: Array<dataType> = [
    {
      id: 1,
      title: '数学',
      titleEn: 'MATHEMATICS'
    }, {
      id: 2,
      title: '进阶数学',
      titleEn: 'FURTHER MATHEMATICS'
    }, {
      id: 3,
      title: '物理',
      titleEn: 'PHYSICS'
    }, {
      id: 4,
      title: '化学',
      titleEn: 'CHEMISTRY'
    }, {
      id: 5,
      title: '生物',
      titleEn: 'BIOLOGY'
    }, {
      id: 6,
      title: '经济',
      titleEn: 'ECONOMICS'
    }, {
      id: 7,
      title: '商务',
      titleEn: 'BUSINESS'
    }, {
      id: 8,
      title: '会计',
      titleEn: 'ACCOUNTING'
    }, {
      id: 9,
      title: '艺术课程',
      titleEn: 'ART&DESIGN'
    },
  ]

  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>常规课程</h2>
          <p>TEACHING MANAGEMENT SYSTEM</p>
        </div>
        <ul>
          {
            data.map((item: dataType) => {
              return (
                <li key={item.id}>
                  <p className={styles.card_title}>{item.title}</p>
                  <p className={styles.card_titleEn}>{item.titleEn}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Course

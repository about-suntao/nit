import React from 'react'
import styles from './daily.module.scss'
import Image from 'next/image'
import picture from '../../../../../public/img/nit/accommodation.webp'

function Daily() {

  const data = [
    {
      id: 1,
      title: '起床',
      time: '7:30',
    }, {
      id: 2,
      title: '早餐',
      time: '7:30-8:00',
    }, {
      id: 3,
      title: '课程',
      time: '8:00-9:30<br/>9:45-12:00',
    }, {
      id: 4,
      title: '午餐&午休',
      time: '12:00-13:30',
    }, {
      id: 5,
      title: '课程',
      time: '13:30-15:00<br/>15:15-17:30',
    }, {
      id: 6,
      title: '晚餐',
      time: '17:30-18:30',
    }, {
      id: 7,
      title: '晚自习',
      time: '18:30-21:30',
    }, {
      id: 8,
      title: '熄灯就寝',
      time: '22:30',
    },
  ]

  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.title}>
              <h2>日常管理</h2>
              <p>Daily Management</p>
              <hr />
            </div>
            <ul>
              <li>
                <div className={styles.point}></div>
                <div className={styles.list}>
                  <h3>留学规划</h3>
                  <p>提供专业考试测评，提供相应的专业选择和留学规划建议，帮助学生和家长少走弯路，提高留学成功率。</p>
                </div>
              </li>
              <li>
                <div className={styles.point}></div>
                <div className={styles.list}>
                  <h3>留后服务</h3>
                  <p>根据学生的需要，选择本项目出国留学的学生可以享受在海外需要的法律支持、经济支持、心理辅导、学业帮助、实习就业以及归国后的安顿等服务。</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <Image src={picture} alt=''></Image>
            <div className={styles.card}>
              <h4>住宿条件</h4>
              <p>校内酒店式公寓</p>
            </div>
          </div>
        </div>
        <div className={styles.time}>
          <ul>
            {
              data.map((item: any) => {
                return (
                  <li key={item.id}>
                    <div className={styles.time_title}>
                      {item.title}
                    </div>
                    <div className={styles.time_time}>
                      <p dangerouslySetInnerHTML={{ __html: item.time }}></p>
                    </div>
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

export default Daily

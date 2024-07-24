'use client'
import React, { useState } from 'react'
import styles from './classItem.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function ClassItem() {

  const data = [
    {
      id: 1,
      title: '港澳名校直通车',
      titleEn: 'Hong Kong and Macao elite schools through train',
      desc: '港澳名校定向培养项目限额招生，从学业规划、课程设置、语言辅导、大学申请全通道进行规划设计，经过学习，可以进以香港大学为首的香港八大，香港恒生大学，香港树仁大学，香港珠海学院，香港都会大学，澳门城市大学、澳门科技大学、澳门大学、澳门理工大学等就读。',
      items: [
        {
          id: 1,
          title: '1+4国际项目班',
          time: '每年9月初',
          set: '第一年A-LEVEL国际课程+雅思培训<br/>第二年根据A-LEVEL和雅思实考成绩申请入读香港澳门名校本科',
          subject: '数学，中文，经济，物理，化学，生物，进阶数学，英语',
          education: '每周一至周五全日制课程，每年暑假都有提前语言集训强化班',
          plan: '1.港澳名校文书申请<br/>2.在读成绩优异同学可参加国际竞赛冲奖小班课<br/>(AMC/BMO/BPHO/PHYSICS/BOWL/UKCHO/BBO/选一)',
        }
      ]
    }, {
      id: 2,
      title: 'QS100名校直通车',
      titleEn: 'QS100 schools through train',
      desc: 'QS100留学项目对接多所世界知名大学，学生可以根据自身的学术能力、大学专业选择和未来发展需要，获得英国、新加坡、澳洲等世界前100位大学offer。',
      items: [
        {
          id: 1,
          title: '1+4国际项目班',
          time: '每年9月初',
          set: '第一年A-LEVEL国际课程+雅思培训<br/>第二年根据A-LEVEL和雅思实考成绩申请入读香港澳门名校本科',
          subject: '数学，中文，经济，物理，化学，生物，进阶数学，英语',
          education: '每周一至周五全日制课程，每年暑假都有提前语言集训强化班',
          plan: '1.港澳名校文书申请<br/>2.在读成绩优异同学可参加国际竞赛冲奖小班课<br/>(AMC/BMO/BPHO/PHYSICS/BOWL/UKCHO/BBO/选一)',
        }, {
          id: 2,
          title: '1+4国际项目班',
          time: '每年9月初',
          set: '第一年A-LEVEL国际课程+雅思培训<br/>第二年根据A-LEVEL和雅思实考成绩申请入读香港澳门名校本科',
          subject: '数学，中文，经济，物理，化学，生物，进阶数学，英语',
          education: '每周一至周五全日制课程，每年暑假都有提前语言集训强化班',
          plan: '1.港澳名校文书申请<br/>2.在读成绩优异同学可参加国际竞赛冲奖小班课<br/>(AMC/BMO/BPHO/PHYSICS/BOWL/UKCHO/BBO/选一)',
        }
      ]
    }, {
      id: 3,
      title: '国际艺术名校直通车',
      titleEn: 'International art school class',
      desc: '海外艺术留学近年来热度居高不下，伦敦艺术大学，美国帕森斯设计学院等，这些世界顶尖级艺术名校都深受中国学生青睐。国际艺术名校直通车项目，从作品集辅导，到A-level艺术课程教学，以及艺术生专属语言课程，全方位量身定制国际艺术升学方案，保障学生在多国连申的情况下取得卓越的升学结果。',
      items: [
        {
          id: 2,
          title: '1+4国际项目班',
          time: '每年9月初',
          set: '第一年A-LEVEL国际课程+雅思培训<br/>第二年根据A-LEVEL和雅思实考成绩申请入读香港澳门名校本科',
          subject: '数学，中文，经济，物理，化学，生物，进阶数学，英语',
          education: '每周一至周五全日制课程，每年暑假都有提前语言集训强化班',
          plan: '1.港澳名校文书申请<br/>2.在读成绩优异同学可参加国际竞赛冲奖小班课<br/>(AMC/BMO/BPHO/PHYSICS/BOWL/UKCHO/BBO/选一)',
        }
      ]
    },
  ]

  const [activeItem, setActiveItem] = useState(data[0])

  const handleActive = (item: any) => {
    setActiveItem(item)
  }

  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          {
            data.map((item: any) => {
              return (
                <li key={item.id} className={activeItem.id === item.id ? styles.active : ''}>
                  <button onClick={() => handleActive(item)}>{item.title}</button>
                </li>
              )
            })
          }
        </ul>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>{activeItem.title}</h2>
            <p>{activeItem.titleEn}</p>
            <hr />
          </div>
          <div className={styles.desc}>
            <p>{activeItem.desc}</p>
          </div>
          <div className={styles.cardBox}>
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {
                activeItem?.items.map((item: any) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className={styles.card}>
                        <h3>{item.title}</h3>
                        <div className={styles.list}>
                          <p className={styles.list_title}>入学时间</p>
                          <p dangerouslySetInnerHTML={{ __html: item.time }}></p>
                        </div>
                        <div className={styles.list}>
                          <p className={styles.list_title}>课程设置</p>
                          <p dangerouslySetInnerHTML={{ __html: item.set }}></p>
                        </div>
                        <div className={styles.list}>
                          <p className={styles.list_title}>教学科目</p>
                          <p dangerouslySetInnerHTML={{ __html: item.subject }}></p>
                        </div>
                        <div className={styles.list}>
                          <p className={styles.list_title}>教学安排</p>
                          <p dangerouslySetInnerHTML={{ __html: item.education }}></p>
                        </div>
                        <div className={styles.list}>
                          <p className={styles.list_title}>升学规划</p>
                          <p dangerouslySetInnerHTML={{ __html: item.plan }}></p>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassItem
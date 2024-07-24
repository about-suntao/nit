'use client'
import React from 'react'
import styles from './teaching.module.scss'
import Image from 'next/image'
import picture from '../../../../../public/img/nit/teaching.webp'
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


SwiperCore.use([Autoplay]);


function Teaching() {

  const data = [
    [
      {
        id: 1,
        title: '考勤系统实时查询',
        desc: '可通过该系统随时查询学生在校期间的出勤情况和考试成绩，实时掌握学生的学习情况。',
      }, {
        id: 2,
        title: '双班主任管理制度',
        desc: '学习班主任监督学生参加早晚自习，解决学生在学习过程中的问题，确保学生跟上教学进度；生活班主任负责学生日常出勤和按时就寝的管理，帮助学生养成良好的学习和生活习惯。',
      }
    ],
    [
      {
        id: 3,
        title: '模拟考试制度',
        desc: '根据学生学习的进度定期进行考试测验，帮助学生及时了解自己的学习情况，也利于老师更准确地安排自己的教学任务。',
      }, {
        id: 4,
        title: '家校同步系统',
        desc: '班主任老师定期反馈学生在校表现，学校与家长共同督促学生学习生活，出现问题及时处理。',
      }
    ]
  ]

  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={picture} alt=''></Image>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h2>教学管理体系</h2>
            <p>TEACHING MANAGEMENT SYSTEM</p>
            <hr />
          </div>
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {
              data.map((item: any) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className={styles.card}>
                      {
                        item.map((i: any) => {
                          return (
                            <div className={styles.list} key={i.id}>
                              <div className={styles.serial}>0{i.id}</div>
                              <div className={styles.list_body}>
                                <h3>{i.title}</h3>
                                <p>{i.desc}</p>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Teaching

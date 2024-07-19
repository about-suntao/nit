'use client'
import React from 'react'
import styles from './course.module.scss'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import picture1 from '../../../../public/img/home/k1.png'

function Course() {

  const data = [
    {
      id: 1,
      title: '港澳名校直通车',
      picture: picture1,
      titleEn: 'Hong Kong and Macao elite schools through train'
    }, {
      id: 2,
      title: 'QS100名校直通车',
      picture: picture1,
      titleEn: 'QS100 schools through train'
    }, {
      id: 3,
      title: '国际艺术名校直通车',
      picture: picture1,
      titleEn: 'International art school class'
    },
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>NIT国际课程</h2>
          <p>International curriculum</p>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
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
                    <Image src={item.picture} alt=''></Image>
                    <div className={styles.card_title}>
                      <h3>{item.title}</h3>
                      <p>{item.titleEn}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      <div className={styles.mobile}>
        <div className={styles.title}>
          <h2>NIT国际课程</h2>
          <p>International curriculum</p>
        </div>
        <Swiper
          slidesPerView={1}
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
                    <Image src={item.picture} alt=''></Image>
                    <div className={styles.card_title}>
                      <h3>{item.title}</h3>
                      <p>{item.titleEn}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Course

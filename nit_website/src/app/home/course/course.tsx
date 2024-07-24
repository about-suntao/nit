'use client'
import React, { useState, useEffect } from 'react'
import styles from './course.module.scss'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import fetchRequest from '@/utils/fetchRequest';

function Course() {

  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/course/queryAll');
    setDataLoaded(true); // 设置数据已加载
    setData(res.data)
  }

  useEffect(() => {
    getData()
  }, []);


  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }

  return (
    <section className={styles.pages}>
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
                    <Image src={item.picture} alt='' width={400} height={300} priority></Image>
                    <div className={styles.card_title}>
                      <h3>{item.name}</h3>
                      <p>{item.englishName}</p>
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
                    <Image src={item.picture} alt='' width={400} height={300} priority></Image>
                    <div className={styles.card_title}>
                      <h3>{item.name}</h3>
                      <p>{item.englishName}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Course

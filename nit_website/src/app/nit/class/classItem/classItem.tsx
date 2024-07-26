'use client'
import React, { useState, useEffect } from 'react'
import styles from './classItem.module.scss'

import fetchRequest from '@/utils/fetchRequest';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function ClassItem() {

  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态
  const [activeItem, setActiveItem] = useState<any>({})

  const [detail, setDetail] = useState<any>({})

  const getDetails = async (id: number) => {
    const res = await fetchRequest.get(`/icon/web/course/${id}`);
    setDetail(res.data)
  }

  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/course/queryAll');
    setData(res.data)
    setActiveItem(res.data[0])
    await getDetails(res.data[0]?.id)
    setDataLoaded(true); // 设置数据已加载
  }

  useEffect(() => {
    getData()
  }, []);

  const handleActive = (item: any) => {
    setActiveItem(item)
    getDetails(item.id)
  }


  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }

  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          {
            data.map((item: any) => {
              return (
                <li key={item.id} className={activeItem.id === item.id ? styles.active : ''}>
                  <button onClick={() => handleActive(item)}>{item.name}</button>
                </li>
              )
            })
          }
        </ul>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>{activeItem.name}</h2>
            <p>{activeItem.englishName}</p>
            <hr />
          </div>
          <div className={styles.desc}>
            <p>{detail.description}</p>
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
                detail.classList.map((item: any) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className={styles.card}>
                        <h3>{item.name}</h3>
                        <div className={styles.list}>
                          <p className={styles.list_title}>入学时间</p>
                          <p dangerouslySetInnerHTML={{ __html: item.enrollmentTime }}></p>
                        </div>
                        <div className={styles.list}>
                          <p className={styles.list_title}>课程设置</p>
                          <p dangerouslySetInnerHTML={{ __html: item.curriculum }}></p>
                        </div>
                        <div className={styles.list}>
                          <p className={styles.list_title}>教学科目</p>
                          <p dangerouslySetInnerHTML={{ __html: item.teachSubject }}></p>
                        </div>
                        <div className={styles.list}>
                          <p className={styles.list_title}>教学安排</p>
                          <p dangerouslySetInnerHTML={{ __html: item.teachArrangement }}></p>
                        </div>
                        <div className={styles.list}>
                          <p className={styles.list_title}>升学规划</p>
                          <p dangerouslySetInnerHTML={{ __html: item.studyPlan }}></p>
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
'use client'
import React, { useState, useEffect } from 'react'
import styles from './news.module.scss'
import Image from 'next/image'

import timeImg from '../../../../public/img/home/time.png'

import fetchRequest from '@/utils/fetchRequest';


function News() {

  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/news/queryByPage?pageNum=1&pageSize=3');
    setDataLoaded(true); // 设置数据已加载
    setData(res.data.list)
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
          <h2>最新资讯</h2>
          <p>Latest News</p>
          <hr />
        </div>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li className={styles.card} key={item.id}>
                  <div className={styles.picture}>
                    <Image src={item.picture} alt='' width={400} height={300} priority></Image>
                  </div>
                  <div className={styles.card_body}>
                    <p className={styles.card_name}>
                      {item.title}
                    </p>
                    <div className={styles.time}>
                      <Image src={timeImg} alt=''></Image>
                      <p>{item.createTime}</p>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className={styles.btn}>
          <button>查看更多</button>
        </div>
      </div>
    </section>
  )
}

export default News

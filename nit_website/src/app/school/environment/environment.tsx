'use client'
import React, { useState, useEffect } from 'react'
import styles from './environment.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest'

function Environment() {

  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/surroundings/queryAll');
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
          <h2>学校环境</h2>
          <p>School Environment</p>
        </div>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li key={item.id}>
                  {item.img && <Image src={item.img} alt='' width={600} height={500} priority></Image>}
                  <div className={styles.name}>
                    <p>{item.name}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Environment

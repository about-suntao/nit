'use client'
import React, { useState, useEffect } from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest'

function Banner({ id }: any) {
  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const getData = async () => {
    const res = await fetchRequest.get(`/icon/web/menu/${id}`);
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
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.backImg}>
          <Image src={data?.picture} alt='' width={1920} height={600}></Image>
        </div>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>{data?.name}</h1>
              <p>{data?.nameEnglish}</p>
            </div>
            <div className={styles.introduce}>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

export const revalidate = 60;


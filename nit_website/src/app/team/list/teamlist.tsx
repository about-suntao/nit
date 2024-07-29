import React from 'react'
import Image from 'next/image'
import styles from './teamList.module.scss'
import fetchRequest from '@/utils/fetchRequest'

async function getData() {
  const res = await fetchRequest.get('/icon/web/teacher/queryAll');
  return res.data
}
async function TeamList() {
  const data = await getData()
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li key={item.id}>
                  <div className={styles.picture}>
                    <Image src={item.picture} alt='' width={600} height={800} priority></Image>
                  </div>
                  <div className={styles.introduce}>
                    <h3>{item.name}</h3>
                    {
                      item.position &&
                      <div className={styles.list}>
                        <p><span>职位：</span>{item.position}</p>
                      </div>
                    }
                    {
                      item.description &&
                      <div className={styles.list}>
                        <p><span>简介：</span>{item.description}</p>
                      </div>
                    }
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default TeamList

export const revalidate = 60; 
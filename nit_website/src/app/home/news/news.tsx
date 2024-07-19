import React from 'react'
import styles from './news.module.scss'
import Image from 'next/image'

import news1 from '../../../../public/img/home/news1.png'
import timeImg from '../../../../public/img/home/time.png'

function News() {

  const data = [
    {
      id: 1,
      title: '名校冲刺：浙大宁波理工学院经理学院A-Level项目VS澳科大先修班',
      picture: news1,
      createTime: '2024-05-14'
    }, {
      id: 2,
      title: '高考不理想，又不想复读或将就？| 国际本科为你圆梦名校！',
      picture: news1,
      createTime: '2024-05-14'
    }, {
      id: 3,
      title: '探校访校活动 | 各省份高考一本线公布，边探校边解答升学疑问探校边解答升学疑探校边解答升学疑',
      picture: news1,
      createTime: '2024-05-14'
    },
  ]

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
                    <Image src={news1} alt=''></Image>
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

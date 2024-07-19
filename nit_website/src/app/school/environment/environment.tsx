import React from 'react'
import styles from './environment.module.scss'
import Image from 'next/image'

import picture1 from '../../../../public/img/school/school.webp'

function Environment() {

  const data = [
    {
      id: 1,
      name: '学院楼',
      picture: picture1
    }, {
      id: 2,
      name: '学院楼',
      picture: picture1
    }, {
      id: 3,
      name: '学院楼',
      picture: picture1
    }, {
      id: 4,
      name: '学院楼',
      picture: picture1
    }, {
      id: 5,
      name: '学院楼',
      picture: picture1
    }, {
      id: 6,
      name: '学院楼',
      picture: picture1
    },
  ]
  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>学校环境</h2>
          <p>School environment</p>
        </div>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li key={item.id}>
                  {item.picture && <Image src={item.picture} alt=''></Image>}
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

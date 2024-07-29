import React from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import fetchRequest from '@/utils/fetchRequest'

async function getData() {
  const res = await fetchRequest.get('/icon/web/teacher/queryAll');
  return res.data
}
async function Team() {
  const data = await getData()
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <p>FACULTY TEAM</p>
          <hr />
          <h1>师资团队</h1>
        </div>
        <div className={styles.introduce}>
          <p>委托浙江宁波理工学院经理学院所办的A-Level国际课程项目师资团队由教学团队、留学服务团队、教学辅助团队、心理咨询辅导团队共同组成，超八成导师都毕业于海外名校，导师拥有硕士及以上学位。导师们多年来深耕国际教育领域，能完美切合学生课程学习需求。</p>
        </div>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li key={item.id}>
                  <div className={styles.photo}>
                    <Image src={item.picture} width={600} height={600} priority={true} alt={item.name}></Image>
                  </div>
                  <hr className={styles.imgBorder} />
                  <div className={styles.info}>
                    <div className={styles.about}>
                      <p className={styles.title}>{item.name}</p>
                      <span className={styles.position}>{item.position}</span>
                    </div>
                    <p className={styles.describe}>{item.description}</p>
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

export default Team

export const revalidate = 60; 
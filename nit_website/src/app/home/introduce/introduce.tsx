import React from 'react'
import Image from 'next/image'
import styles from './introduce.module.scss'

import picture1 from '../../../../public/img/home/i1.webp'
import picture2 from '../../../../public/img/home/i2.webp'
import picture3 from '../../../../public/img/home/i3.webp'


function Introduce() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>浙大宁波理工学院经理学院国际课程中心</h2>
          <p>NINGBO INSTITUTE OF TECHNOLOGY A-LEVEL CENTRE</p>
          <hr />
        </div>
        <div className={styles.content}>
          <p>浙大宁波理工学院经理学院A-Level国际课程项目依托985名校资源，为学生提供优质教育和名校录取保障。项目在校内进行1-2年的培养，学生享受与统招生相同的优质教育资源。项目提供全方位的学术支持和丰富的学习环境，帮助学生提升综合能力，适应国际教育。 </p>
          <p>完成一年的全日制学业后，学生通过A-Level成绩可申请英、澳、新、港等国家和地区的优秀院校，继续完成本科课程的学习，开启国际化的教育之旅。</p>
        </div>
        <div className={styles.picture}>
          <Image src={picture1} alt=''></Image>
          <Image src={picture2} alt=''></Image>
          <Image src={picture3} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default Introduce

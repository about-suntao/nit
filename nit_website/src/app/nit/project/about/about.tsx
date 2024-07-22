import React from 'react'
import Image from 'next/image'
import styles from './about.module.scss'

import picture from '../../../../../public/img/nit/about.webp'

function About() {
  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h2>关于A-Level</h2>
            <p>About A-levels</p>
          </div>
          <div className={styles.desc}>
            <p>A-Level名校留学项目自创办以来,不断地调整、优化,先后培养了百余名优秀学子,顺利前往英国牛津大学、帝国理工大学、伦敦政治经济学院、新加坡国立大学、南洋理工大学、香港大学、澳门大学、墨尔本大学等QS排名靠前的世界一流名校留学。本项目定点在浙大宁波理工学院定点培养1-2年,学生在校期间与统招生同享一流高校资源,提前体验大学的教学环境,感受浙大宁波理工学院前沿的学术氛围,提升自身综合能力的同时奠定国际教育适应基础,为未来顺利进入海外大学留学做好准备。</p>
            <br />
            <p>QS世界大学排名是世界上最受注目的大学排行榜之一,就读QS排名靠前的大学对学生未来学术发展和生涯规划有着深远的影响。国内各地方落户及归国人才优待政策,多数与双一流高校、双一流专业及QS前100高校等条件挂钩。为帮助中国学生科学合理规划学业及就业方案,项目综合国内外资源优势开设世界顶级名校本科留学班、QS100本科留学班和港澳名校定向培养班,旨在为学生提供一站式的留学支持与服务。</p>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={picture} alt=''></Image>
        </div>
      </div>
    </section>
  )
}

export default About

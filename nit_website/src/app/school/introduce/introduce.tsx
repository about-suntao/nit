import React from 'react'
import styles from './introduce.module.scss'
import Image from 'next/image'

import SchoolImg from '../../../../public/img/school/school.webp'

function Introduce() {
  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>浙大宁波理工学院经理学院</h2>
            <p>Ningbo Managers’ Academy</p>
          </div>
          <div className={styles.introduce}>
            <p>宁波经理学院是专门从事企业经营管理人才和党政干部培训的独立法人教育机构。学院2006年由市委组织部联合浙大宁波理工学院发起，2009年正式挂牌宁波经理学院；2019年宁波市国资委委托通商集团出资正式注册，2023年转隶至人才集团。</p>
            <p>办学以来，学院坚持以培养“宁波重点领域、重点产业企业家”为核心职能，以提升企业高级经营管理人才和党政干部的国际视野及综合素养为目标，广泛开展制造业人才、贸易金融精英人才、现代农业领军人才、外贸企业领军人才、文化产业经营人才等培训项目。累计服务企业3000余家，受训学员2万余人，其中企业家学员近万人，多数为宁波企业经营管理人才队伍的中坚力量。</p>
          </div>
        </div>
        <div className={styles.picture}>
          <Image src={SchoolImg} alt=''></Image>
        </div>
      </div>
    </section>
  )
}

export default Introduce

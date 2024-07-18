import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'

import logoImg from '../../../../public/img/home/footerLogo.webp'

import phoneImg from '../../../../public/img/home/phone.webp'
import locationImg from '../../../../public/img/home/location.webp'
import mailImg from '../../../../public/img/home/mail.webp'

import publicCode from '../../../../public/img/home/publicCode.webp'
import wxCode from '../../../../public/img/home/wxCode.webp'

function Footer() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logoImg} alt=''></Image>
        </div>
        <div className={styles.contact}>
          <div className={styles.title}>
            <h2>联系方式</h2>
            <p>Contact us</p>
          </div>
          <div className={styles.line}></div>
          <ul>
            <li>
              <Image src={phoneImg} alt=''></Image>
              <p>0574-88220980 / 0574-87057120</p>
            </li>
            <li>
              <Image src={locationImg} alt=''></Image>
              <p>浙江省宁波市鄞州区首南街道钱湖南路1号</p>
            </li>
            <li>
              <Image src={mailImg} alt=''></Image>
              <p>a-level@nbt.edu.cn</p>
            </li>
          </ul>
        </div>
        <div className={styles.code}>
          <div className={styles.title}>
            <h2>扫码关注</h2>
            <p>Scan code attention</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.qr}>
            <div className={styles.qr_Box}>
              <Image src={publicCode} alt=''></Image>
              <p>官方公众号</p>
            </div>
            <div className={styles.qr_Box}>
              <Image src={wxCode} alt=''></Image>
              <p>官方微信号</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.foot}></div>
    </div>
  )
}

export default Footer

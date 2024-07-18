'use client'
import React, { useState, useEffect } from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import fetchRequest from '@/utils/fetchRequest';
import { useRouter } from 'next/navigation';


import { EnvironmentFilled, PhoneFilled } from '@ant-design/icons';

import logo from '../../../../public/img/home/logo.webp'
import publicCode from '../../../../public/img/home/publicCode.webp'
import wxCode from '../../../../public/img/home/wxCode.webp'

function Footer() {
  const router = useRouter()
  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const getData = async () => {
    const params = {
      pageNum: 1,
      pageSize: 3,
    }
    const res: any = await fetchRequest.get(`/icon/web/news/queryByPage`, params);
    setData(res.data.list)
    setDataLoaded(true);
  }

  const handleRoute = (id: number) => {
    router.push(`/schoolDynamic/${id}`)
  }

  function openNewWindow(url: string) {
    window.open(url, '_blank');
  }

  useEffect(() => {
    getData()
  }, []);

  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.school}>
          <div className={styles.logo}>
            <Image src={logo} alt='logo'></Image>
          </div>
          <p className={styles.mark}>
            崇德博学、创新务实
          </p>
          <div className={styles.qrBox}>
            <div className={styles.qrCode}>
              <Image src={publicCode} alt=''></Image>
              <p>招生在线报名</p>
            </div>
            <div className={styles.qrCode}>
              <Image src={wxCode} alt=''></Image>
              <p>关注官方公众号</p>
            </div>
          </div>
        </div>
        <div className={styles.situation}>
          <h2>网站概况</h2>
          <p><Link href="/school/profile">学校概况</Link></p>
          <p><Link href="/course">学部建设</Link></p>
          <p><Link href="/international">教育教学</Link></p>
          <p><Link href="/team/management">校园生活</Link></p>
          <p><Link href="/campusClass">招生报名</Link></p>
        </div>
        <div className={styles.contact}>
          <h2>联系方式</h2>
          <div className={styles.card}>
            <p>
              <span className={styles.phoneIcon}>
                <PhoneFilled />
              </span>
              联系电话
            </p>
            <div className={styles.cardBody}>
              <div className={styles.right}>
                <p>0756-8826666/8826388</p>
                <p>18128127572(微信同号)</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p> <EnvironmentFilled /> 学校地址</p>
            <div className={styles.cardBody}>
              <div className={styles.right} onClick={() => openNewWindow('https://www.amap.com/place/B02F4025Y7')}>
                <p>珠海市香洲区湾仔银湾路1689号 </p>
                <p>(导航搜索“希望之星实验学校”即可)</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.news}>
          <h2>校园动态</h2>
          {
            data.map((item: any) => {
              return (
                <div className={styles.card} key={item.id} onClick={() => handleRoute(item.id)} >
                  <div className={styles.card_left}>
                    <Image src={item.picture} alt='' width={100} height={100} priority></Image>
                  </div>
                  <div className={styles.card_right}>
                    <p>{item.title}</p>
                    <span>{item.createTime}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div >
  )
}

export default Footer

'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import type { MenuProps } from 'antd';

import styles from './page.module.scss'

import logo from '../../../../public/img/home/logo.webp'


type MenuItem = Required<MenuProps>['items'][number];

function Header() {

  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const [current, setCurrent] = useState('home');
  const path = usePathname()

  const [open, setOpen] = useState(false);


  function openNewWindow(url: string) {
    window.open(url, '_blank');
  }
  const items: MenuItem[] = [
    {
      label: <Link href="/">首页</Link>,
      key: 'home',
    },
    {
      label: (<Link href="/school">关于学校</Link>),
      key: '/school',
    },
    {
      label: 'NMA国际课程',
      key: '/nma',
      children: [
        {
          label: (<Link href="/nma/project">项目简介</Link>),
          key: '/nma/project',
        }, {
          label: (<Link href="/nma/class">班型设置</Link>),
          key: '/nma/class',
        }, {
          label: (<Link href="/nma/education">教育管理</Link>),
          key: '/nma/education',
        },
      ]
    },
    {
      label: (<Link href="/team">师资团队</Link>),
      key: '/team',
    }, {
      label: (<Link href="/commonProblem">常见问题</Link>),
      key: '/commonProblem',
    },
    {
      label: (<Link href="/news">最新资讯</Link>),
      key: '/news',
    },
    {
      label: '报名通道',
      key: '/apply',
      children: [
        {
          label: (<Link href="https://icon-bit.oss-cn-hangzhou.aliyuncs.com/2024/09/11/109_A-level合作方招生简章.pdf" target="_blank">招生简章</Link>),
          key: 'apply',
        }, {
          label: (<Link href="/apply/way">报名方式</Link>),
          key: '/apply/way',
        },
      ]
    },

  ];

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  const onClose = () => {
    setOpen(false);
  };

  const openDrawer = () => {
    setOpen(!open);
  }

  useEffect(() => {
    if (path === '/') {
      setCurrent('home')
    } else {
      setCurrent(path)
    }
  }, [path])

  // menu组件小于768隐藏后，放大不会重载，解决这个问题
  useEffect(() => {
    const handleResize = () => {
      setIsMenuVisible(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoImg}>
          <Image src={logo} alt=''></Image>
        </div>
        <div className={styles.menu}>
          {isMenuVisible && (<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />)}
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.logoImg}>
          <Image src={logo} alt=''></Image>
        </div>
        <div className={styles.menu} >
          <MenuOutlined onClick={openDrawer} />
        </div>
        <div className={styles.mobileNav} style={{ display: open ? '' : 'none' }}>
          <Drawer
            placement="right"
            open={open}
            closable={false}
            getContainer={false}
            onClose={onClose}
          >
            <div className={styles.drawerNav}>
              <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={items} />
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default Header

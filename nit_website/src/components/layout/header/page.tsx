'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
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
      label: 'NIT国际课程',
      key: '/nit',
      children: [
        {
          label: (<Link href="/nit/project">项目简介</Link>),
          key: '/nit/project',
        }, {
          label: (<Link href="/nit/class">班型设置</Link>),
          key: '/nit/class',
        }, {
          label: (<Link href="/nit/education">教育管理</Link>),
          key: '/nit/education',
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
      key: '/recruitStudent',
      children: [
        {
          label: (<a onClick={() => openNewWindow('')}>招生简章</a>),
          key: 'recruitStudent',
        }, {
          label: (<a onClick={() => openNewWindow('')}>报名方式</a>),
          key: 'apply',
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

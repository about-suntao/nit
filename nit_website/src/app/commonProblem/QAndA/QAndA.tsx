'use client'
import React from 'react'
import styles from './QAndA.module.scss'
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import Image from 'next/image';

import logoImg1 from '../../../../public/img/QAndA/logo1.webp'
import logoImg2 from '../../../../public/img/QAndA/logo2.webp'
import logoImg3 from '../../../../public/img/QAndA/logo3.webp'


function QAndA() {

  const Component = () => {
    return (
      <div className={styles.card}>
        <p>不同考试局的A-Level考试时间和考试次数都有所差异。</p>
        <div className={styles.items}>
          <span></span><p>CAIE考试局：一般来说一年有2次考试，分别是在6月份和10月份。6月份的考试往往是在暑假来临前，属于大考;10月份的这个考试则相当于补考，因此10月份的考题难度会高于6月份的考试。</p>
        </div>
        <div className={styles.items}>
          <span></span><p>EDEXCEL考试局：每一年有3次机会，分别在10月份、1月份和6月份。三次考试难度统一。</p>
        </div>
        <div className={styles.items}>
          <span></span><p>AQA考试局：一般来说一年2次考试，分别是在1月份和6月份，考试难度相对统一。</p>
        </div>
        <div className={styles.imgBox}>
          <Image src={logoImg1} alt=''></Image>
          <Image src={logoImg2} alt=''></Image>
          <Image src={logoImg3} alt=''></Image>
        </div>
      </div>
    )
  }

  const getItems = () => [
    {
      key: '1',
      label: '什么是A-LEVEL课程?',
      children: <p>A-Level, 全称The General Certificate of Education Advanced Level简称GCE A-Level或者A-Level,是英国普通中等教育证书考试高级水平课程。<br />通过该课程的考试后，可以申请全球大多数国家的大学。A-Level学习分成两个部分，第一部分是AS, 第二部分是A2。通常情况下，在2年制课程中，AS是A-Level课程的第一年，A2是第二年。AS与A2的成绩累计合成最终A-Level成绩，各占50%。<br /> A-Level作为独立于中国的教育体系之外的考试体系，参加考试的学生可直接注册英国学籍，不需要中国初中、高中或大学成绩，也不需要读预科。</p>,
    },
    {
      key: '2',
      label: 'A-LEVEL课程如何评分?',
      children: <p>A-Level的评分为A*、A、B、C、D、E、U等级制，A*为最优，E为通过，U为不合格。学生在参加A-Level某个单元的考试后，会根据考试的答题情况，得到一个卷面分(Raw mark)。而各个考试局会根据本次考试的难度等因素对A*/A/B等不同等级进行分数线的划分再将卷面分折算成一个标准分(UMS mark)。最后学生看到的成绩一般是进行折算后的成绩(UMS mark)。当学生学完两年的A-Level课程，再把某一门学科的所有单元成绩进行加和，给出最终的成绩评定。一流的大学一般要求A甚至是A*，比如像剑桥、牛津这些G5的学校，根据不同专业，要考3-4门考试，提供至少3门课的成绩，特别是会要求有两门达到A*一门A, 或三门都在A以上，对同学的学习要求还是非常高的。</p>,
    },
    {
      key: '3',
      label: 'A-LEVEL课程有哪些?',
      children: <p>A-Level课程涵盖范围广泛，一共有70多门课程可以选择:数学类:数学、进阶数学 理工类:物理、化学、生物 社会科学类:地理、会计、商科、经济、心理等……在中国一般开设数学、物理、计算机学、化学、生物、经济学等科目。A-Level分为两个阶段。第一个阶段为AS阶段:学生可以选择3-5门课程，通过考试后获得AS证书，AS占A-Level成绩的50%。第二个阶段为A2阶段: 学生一般选择3-4门课继续学习(可以选择放弃自己学习比较困难的课程，或者保留所有课程继续学习)通过考试后获得A-Level证书，A2成绩占A-Level的50%(大部分学生选3门课即可)。</p>,
    },
    {
      key: '4',
      label: 'A-LEVEL的考试时间?',
      children: <Component></Component>,
    }
  ];

  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIconPosition={'end'}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          items={getItems()}
        />
      </div>
    </section>
  )
}

export default QAndA

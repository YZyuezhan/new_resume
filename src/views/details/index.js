import React, { useEffect } from 'react'

import Chart from '../../components/chart'
import Histogram from '../../components/histogram'
import WorkDetails from '../works_details'
import style from '../../assets/style/details.module.css'
export default function SkillsDetails(props) {



  const close = () => {
    document.getElementById('card').style.height = document.getElementById('card').clientHeight + 'px'
    setTimeout(() => {
      document.getElementById('card').style.overflow = 'hidden'
      document.getElementById('card').style.height = '0px'
    }, 50)
    setTimeout(() => {
      props.onCloseDetails()
    }, 500);
  }
  const skillsInfo = [
    { id: 1, proficiency: 85, label: 'JavaScript', color: '#fb5710' },
    { id: 2, proficiency: 80, label: 'Vue', color: '#a821e7' },
    { id: 3, proficiency: 60, label: 'React', color: '#fbb810' },
    { id: 4, proficiency: 60, label: '微信小程序', color: '#04b962' }
  ]
  const progressInfo = [
    { id: 1, proficiency: '90%', label: 'HTML' },
    { id: 2, proficiency: '90%', label: 'CSS' },
    { id: 3, proficiency: '60%', label: 'Echarts' },
    { id: 4, proficiency: '40%', label: 'Node.Js' },
    { id: 5, proficiency: '80%', label: 'ES6' },
    { id: 6, proficiency: '75%', label: 'Git / SVN' },
  ]
  useEffect(() => {
    document.getElementById('card').style.opacity = '0'
    setTimeout(() => {
      document.getElementById('card').style.opacity = '1'
    }, 50)
  }, [])
  return (
    <div className={style.card} id="card">
      <i className='iconfont icon-close-bold' onClick={close}></i>
      {/* 展示技能详情 */}
      {props.type === 'skills' ? <div className={style.card_view}>
        <div className={style.map}>
          <Chart list={skillsInfo} />
        </div>
        <Histogram list={progressInfo} />
      </div> : false}
      {/* 工作经历卡片 */}
      {props.type === 'works' ? <WorkDetails /> : false}
    </div>
  )
}

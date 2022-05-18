import React, { useState } from 'react'
import User from '../user'
import About from '../about'
import Details from '../details'
import Card from '../card'
import Project from '../../components/projectcard'
import style from '../../assets/style/home.module.css'

export default function Home() {
  const [openDetails, setopenDetails] = useState(false)
  const [type, setType] = useState('skills')
  const [showProject, setshowProject] = useState(false)
  const [projectInfo, setInfo] = useState(null)
  const list = [
    { id: 1, icon: 'iconfont icon-script', label: '技能', key: 'skills' },
    { id: 2, icon: 'iconfont icon-bianjimoban', label: '项目', key: 'works' },
    { id: 3, icon: 'iconfont icon-dingwei', label: '留言', key: 'contact' }
  ]
  // 展示skills卡片
  const setOpenDetailsCard = (type) => {
    setType(type)
    setopenDetails(true)
  }
  // 关闭skills卡片
  const closeDetailsCard = () => {
    setopenDetails(false)
  }
  // 打开项目详情
  const openProject = (item) => {
    setInfo(item)
    setshowProject(true)
  }
  // 关闭项目详情
  const closeProject = () => {
    setshowProject(false)
  }
  return (
    <div className={style.main}>
      <User />
      <About />
      {list.map(item => {
        return <Card key={item.id} class={item.key} row={item} onSetDetails={setOpenDetailsCard} />
      })}
      {/* 卡片 */}
      {openDetails ? <Details type={type} onCloseDetails={closeDetailsCard} openProject={openProject} /> : false}
      {/* project details */}
      {showProject ? <Project projectInfo={projectInfo} closeProject={closeProject} /> : false}
    </div>
  )
}

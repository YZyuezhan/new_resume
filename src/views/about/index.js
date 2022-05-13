import React from 'react'
import style from '../../assets/style/about.module.css'
export default function About () {

  const info = [
    {
      id: 1,
      iconName: 'iconfont icon-diqiu',
      dec: '西安市西咸新区沣西新城文教园',
      value: '家庭住址'
    },
    {
      id: 2,
      iconName: 'iconfont icon-tubiao',
      dec: 'HTML、CSS、JavaScript、Vue、React、微信小程序、Node.js、Echarts、ElementUI、AntD、Vant',
      value: '代码技能'
    },
    {
      id: 3,
      iconName: 'iconfont icon-shoujidiannao',
      dec: '从事前端开发三年有余，对于Web端、移动端均有开发，熟练开发中后台管理系统，善于用户交互，性价比极高',
      value: '工作经历'
    }
  ]

  return (
    <div className='about'>
      <h2 className={style.title}>About <span>Me</span></h2>
      <ul className={style.list}>
        {info.map(item => {
          return <li key={item.id}>
            <i className={item.iconName}></i>
            <div>
              <h3>{item.value}</h3>
              <span>{item.dec}</span>
            </div>
          </li>
        })}

      </ul>
    </div>
  )
}

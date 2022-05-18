import React, { useState } from 'react'
import style from '../../assets/style/user.module.css'
export default function User() {

  const [info, setinfo] = useState('')
  const [show, setshow] = useState(false)

  const icons = [
    { id: 1, icon: 'iconfont icon-weixin', value: '微信：18329935900' },
    { id: 2, icon: 'iconfont icon-QQ', value: 'QQ：1114944681' },
    { id: 3, icon: 'iconfont icon-fapiaoyoujidizhi', value: '邮箱：yuezhanhope@163.com' },
    { id: 4, icon: 'iconfont icon-dianhua', value: '电话：18329935900' }
  ]
  const openInfo = (val) => {
    if (val === info) {
      setinfo('')
      setshow(false)
      return
    }
    setinfo(val)
    setshow(true)
  }
  // 调用电话
  const setPhone = () => {

    if (info.substring(0, 2) === '电话') {
      window.location.href = 'tel:18329935900'
    }
    if (info.substring(0, 2) === '邮箱') {
      window.location.href = 'mailto:yuezhanhope@163.com'
    }

  }

  return (
    <div className='user'>
      <div className={style.title}>
        <h1>岳 <span>I Am YueZhan</span> 展</h1>
        <h3>Web & Mobile 前端开发</h3>
        <ul className={style.icons}>

          {icons.map(item => {
            return <li key={item.id} onClick={() => { openInfo(item.value) }}>
              <i className={item.icon}></i>
            </li>
          })}

        </ul>
        {info === '' & !show ? false : <div className={style.info} onClick={setPhone}>{info}</div>}

      </div>

    </div>
  )
}

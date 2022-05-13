import React from 'react'
import style from '../../assets/style/workdetails.module.css'

const getImg = (url) => {
  return `url(${url})`
}

export default function WorkDetails() {
  const list = [
    {
      id: 1, projectName: '甘肃省住房资金管理中心', imgList: [
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gss.063403e2.jpg' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gss3.94785cc6.png' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gss5.189eae05.png' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gss2.847c2a2d.png' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gss4.b92cd277.png' }
      ], describe: '技术栈描述相关', link: 'http://124.71.183.19:8903'
    },
    {
      id: 2, projectName: '公积金门户网站论坛', imgList: [
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gjj.d1c4d911.jpg' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gjj2.e75265c7.png' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gjj3.6943f239.png' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gjj4.c4ea2822.png' }
      ], describe: '技术栈描述相关', link: 'http://www.zggjjw.com'
    },
    {
      id: 3, projectName: '陕西省住房资金管理中心自助机', imgList: [
        { url: 'https://static-liard.vercel.app/img/zzj1.53b9f7cc.png' },
        { url: 'https://static-liard.vercel.app/img/zzj2.24977b8a.png' },
      ], describe: '技术栈描述相关', link: ''
    },
    {
      id: 4, projectName: '嘉峪关电子档案', imgList: [
        { url: 'https://static-liard.vercel.app/img/jyg1.eb59d467.jpg' },
        { url: 'https://static-liard.vercel.app/img/jyg2.77a8aeb7.png' },
        { url: 'https://static-liard.vercel.app/img/jyg3.129f0ccb.jpg' },
        { url: 'https://static-liard.vercel.app/img/jyg4.83ee9787.png' },
      ], describe: '技术栈描述相关', link: ''
    },
  ]
  return (
    <div className={style.work_view}>
      <h2>项目概览</h2>
      <ul>
        {list.map(item => {
          return <li key={item.id} style={{ backgroundImage: `url(${item.imgList[0].url})` }}></li>
        })}
      </ul>
    </div>
  )
}

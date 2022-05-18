import React from 'react'
import style from '../../assets/style/workdetails.module.css'


export default function WorkDetails(props) {
  const list = [
    {
      id: 1, projectName: '甘肃省住房资金管理中心', imgList: [
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gss.063403e2.jpg' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gss3.94785cc6.png' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gss5.189eae05.png' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gss2.847c2a2d.png' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gss4.b92cd277.png' }
      ], describe: '<b>技术选型：</b>Vue + ElementUI + Echarts + PageOffice <br/><b>项目描述：</b>', link: 'http://124.71.183.19:8903'
    },
    {
      id: 2, projectName: '公积金门户网站论坛', imgList: [
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gjj.d1c4d911.jpg' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gjj2.e75265c7.png' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gjj3.6943f239.png' },
        { url: 'https://static-lh3g98y4w-yzyuezhan.vercel.app/img/gjj4.c4ea2822.png' }
      ], describe: '技术选型：JQuery + HTML + CSS <br/><b>项目描述：</b>本论坛由公积金信息化（西安）研究中心与燕山大学住房公积金研究中心联合主办，西安广厦信息科技有限公司负责运行维护和技术支持。本论坛作为住房公积金行业专业、权威、全面的信息交流平台，专注为广大公积金人和公众提供优质的互动、资讯等服务。本论坛是公积金行业人士交流、学习、分享的窗口，也是公众查询、咨询、求助的渠道', link: 'http://www.zggjjw.com'
    },
    {
      id: 3, projectName: '陕西省住房资金管理中心自助机', imgList: [
        { url: 'https://static-liard.vercel.app/img/zzj1.53b9f7cc.png' },
        { url: 'https://static-liard.vercel.app/img/zzj2.24977b8a.png' },
      ], describe: '技术选型：Vue + ElementUI + face', link: ''
    },
    {
      id: 4, projectName: '嘉峪关电子档案', imgList: [
        { url: 'https://static-liard.vercel.app/img/jyg1.eb59d467.jpg' },
        { url: 'https://static-liard.vercel.app/img/jyg2.77a8aeb7.png' },
        { url: 'https://static-liard.vercel.app/img/jyg3.129f0ccb.jpg' },
        { url: 'https://static-liard.vercel.app/img/jyg4.83ee9787.png' },
      ], describe: '技术选型：Vue + ElementUI + Echarts + PageOffice', link: ''
    },
  ]
  // 打开项目详情
  const gotoDetails = (item) => {
    props.openProject(item)
  }
  return (
    <div className={style.work_view}>
      <h2>项目概览</h2>
      <ul>
        {list.map(item => {
          return <li key={item.id} style={{ backgroundImage: `url(${item.imgList[0].url})` }} onClick={() => gotoDetails(item)}></li>
        })}
      </ul>
    </div>
  )
}

import React, { useEffect } from 'react'
import style from '../assets/style/histogram.module.css'
export default function Histogram (props) {

  useEffect(() => {
    let p = document.getElementsByClassName(style.progress)
    let h = document.getElementById('histogram')
    for (let i = 0; i < p.length; i++) {
      const element = p[i];
      console.log();
      setTimeout(() => {
        element.style.width = h.clientWidth * (Number(props.list[i].proficiency.substring(0, 2)) / 100) + 'px'
      }, 200);
    }
    return () => {

    };
  }, [])


  return (
    <div className={style.histogram} id='histogram'>
      {props.list.map((item) => {
        return <div key={item.id} className={style.box}>
          <div className={style.dec}>
            <span>{item.label}</span>
            <span>{item.proficiency}</span>
          </div>
          <div className={style.strip}>
            <div className={style.progress}></div>
          </div>
        </div>
      })}
    </div>
  )
}

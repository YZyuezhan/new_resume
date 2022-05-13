import React, { useEffect } from 'react'
import { gauge } from '../utils/canvas'
import style from '../assets/style/canvas.module.css'
export default function Chart (props) {

  useEffect(() => {
    let c = document.getElementsByClassName('mycanvas')
    for (let i = 0; i < c.length; i++) {
      const element = c[i];
      gauge(element, props.list[i].proficiency, { color: props.list[i].color, unit: " %", type: "default" })
    }

  }, [])

  return (
    <div className={style.chart}>
      {props.list.map(item => {
        return <div key={item.id} className={style.chart_view}>
          <canvas id="mycanvas" className="mycanvas" width="200" height="200">
            Your browser does not support the canvas element.
          </canvas>
          <h4>{item.label}</h4>
        </div>
      })}
    </div>
  )
}

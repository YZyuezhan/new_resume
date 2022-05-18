import React, { useEffect } from 'react';

const Projectcard = (props, val) => {
    const close = () => {
        props.closeProject()
    }
    useEffect(() => {
        document.getElementById('des').innerHTML = props.projectInfo.describe
    }, []);
    return (
        <div className='projectCard'>
            <div className='cardInfo'>
                <i className='iconfont icon-close-bold' onClick={close}>
                </i>
                <div className='cardbox'>
                    <h3>{props.projectInfo.projectName}</h3>
                    <img src={props.projectInfo.imgList[0].url} alt="" />
                    <p id='des'>
                    </p>
                    {props.projectInfo.imgList.map((item, index) => {
                        return index === 0 ? false : <img key={item.url} src={item.url} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projectcard

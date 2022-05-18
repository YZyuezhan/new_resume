import React, { useState } from 'react';
import style from '../assets/style/contact.module.css'
const Contact = (props) => {
    const [disabled, setdisavled] = useState(false)
    // 提交留言
    const sendMail = () => {
        if (!submitCheck()) {
            return
        }
        setdisavled(true)
        var xhr = new XMLHttpRequest();
        xhr.open(
            'get',
            `https://nodeemail.vercel.app/?name=${form.username}&email=${form.email}&tel=${form.tel}&msg=${form.msg || '未留言'}`
        );
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                let res = JSON.parse(xhr.response)
                if (res.code === 0) {
                    setdisavled(false)
                    createTips('留言成功！我将尽快回复您', 'success')
                    props.close()

                } else {
                    setdisavled(false)
                    createTips('留言失败，出现了一些小错误，劳烦致电联系', 'error')
                    props.close()
                }
            }
        };
    }
    let form = {

    }
    let repName = /(^[\u4e00-\u9fa5]{1}[\u4e00-\u9fa5\.·。]{0,18}[\u4e00-\u9fa5]{1}$)|(^[a-zA-Z]{1}[a-zA-Z\s]{0,18}[a-zA-Z]{1}$)/
    let repTel = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/
    let repEmail = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/
    const saveFormData = (e, type) => {
        form[type] = e.target.value
    };
    const submitCheck = () => {
        let tips = false
        !repName.test(form.username) ? createTips('姓名输入有误，请重新输入', 'error') : !repTel.test(form.tel) ? createTips('手机输入格式有误，请重新输入', 'error') : !repEmail.test(form.email) ? createTips('邮箱输入格式有误，请重新输入', 'error') : tips = true
        return tips
    }
    // 校验文本框
    const test = (e) => {
        const { name, value } = e.target
        if (name === 'username') {

            if (value !== '') {
                repName.test(value) ? console.log('') : createTips('姓名输入有误，请重新输入', 'error')
            }
        }
        if (name === 'tel') {
            if (value !== '') {
                repTel.test(value) ? console.log('') : createTips('手机输入格式有误，请重新输入', 'error')
            }
        }
        if (name === 'email') {
            if (value !== '') {
                repEmail.test(value) ? console.log('') : createTips('邮箱输入格式有误，请重新输入', 'error')
            }
        }
    }
    // 提示语
    const createTips = (tips = '', type = 'error') => {
        let d = document.createElement('div');
        d.className = 'tips';
        d.id = 'tips';
        d.innerHTML = `<div class='toltips ${type}'>${tips}</div>`;
        d.style.animation = 'move 3s ease-out 0s 1 normal';
        document.getElementById('root').appendChild(d);
        setTimeout(() => {
            document.getElementById('tips').remove();
        }, 2900);
    }
    return (
        <div className={style.contactcard}>
            <h3 className={style.title}>留言板</h3>
            <div className={style.contact}>
                <div className={style.form}>
                    <label htmlFor="">您的姓名</label>
                    <input type="text" name='username' autoComplete='off' onBlur={(e) => { test(e) }} onChange={(e) => { saveFormData(e, 'username') }} disabled={disabled} />
                </div>
                <div className={style.form}>
                    <label htmlFor="" >手机号码</label>
                    <input type="text" name='tel' autoComplete='off' onBlur={(e) => { test(e) }} onChange={(e) => { saveFormData(e, 'tel') }} disabled={disabled} />
                </div>
                <div className={style.form}>
                    <label htmlFor="">电子邮箱</label>
                    <input type="text" name='email' autoComplete='off' onBlur={(e) => { test(e) }} onChange={(e) => { saveFormData(e, 'email') }} disabled={disabled} />
                </div>
            </div>
            <div className={style.message}>
                <label htmlFor="">留言内容</label>
                <textarea rows="5" name='msg' onChange={(e) => { saveFormData(e, 'msg') }} disabled={disabled}></textarea>
            </div>
            <div className={style.submit}>
                <button className={style.blue} onClick={sendMail} disabled={disabled}>通知我</button>
            </div>
            {/* 加载的动画 */}
            {disabled ? <div className={style.markDisabled}>
                <span>正在发送留言，请稍等片刻.....</span>
                <div className={style.circle}></div>
            </div> : null}
        </div>

    );
}

export default Contact;

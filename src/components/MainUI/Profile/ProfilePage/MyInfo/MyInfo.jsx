import React from "react";
import s from './MyInfo.module.scss'

const MyInfo = (props) => (
	<div className={s.myInfo}>
		<span className={s.name}>Ильдар Скриптизеров</span>
		<span className={s.whenBirthDay + ' ' + s.info}>Дата рождения:</span>
		<span className={s.birthDay + ' ' + s.info}>2007</span>
		<span className={s.whereSity + ' ' + s.info}>Город:</span>
		<span className={s.sity + ' ' + s.info}>Сказка</span>
	</div>
)

export default MyInfo

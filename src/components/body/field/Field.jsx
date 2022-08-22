import React from 'react'
import { useState } from 'react'
import style from './style.module.css'


const Field = ({ startIndex, num, endIndex, setErrorItemTopLvl, errorTopLvl, startgame }) => {
   let [goodItem, setGoodItem] = useState(false)
   let [errorItem, setErrorItem] = useState(false)
   let start = false
   let there = false

   // показываем начальную точку 
   if (num === startIndex && startgame) {
      start = true
   }
   // проверяем точку на правильность
   const checkResult = () => {
      // если угадали то показываем это 
      if (num === endIndex) {
         setGoodItem(goodItem = true)
      }
      // если не угадали показываем ошибку 
      if (num !== endIndex) {
         setErrorItem(errorItem = true)
         setErrorItemTopLvl(errorItem = true)
      }
   }
   if (errorTopLvl) {
      if (num === endIndex) {
         there = true
      }
   }

   return (
      <div onClick={checkResult} className={style.body}     >
         <div className={start && style.start || style.startNone} >Старт!</div>
         <div className={errorItem && style.error || style.errorNone}>Попробуй еще раз!</div>
         <div className={goodItem && style.good || style.goodNone}>Молодец!</div>
         <div className={there && style.there || style.thereNone}>Финиш здесь!</div>
      </div>
   )
}
export default Field
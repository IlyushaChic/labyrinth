import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Field from './field/Field';
import style from './style.module.css'
import { FIELD } from '../../store/types'


const Body = () => {

   const dispatch = useDispatch()//отправка в обработку
   const store = useSelector(store => store.reducerBody)

   //создаем начальное положение точки
   let startIndex = Math.floor(Math.random() * 9 + 1)
   let [endIndex, setEndIndex] = useState(startIndex);
   //массив ходов
   let movies = [];
   let [startgame,setStartGame]=useState(false)

   /** 
      // расшифровка ходов 
      const possibleMoves = {
         1: "UP",
         2: "DOWN",
         3: "LEFT",
         4: "RIGHT",
      }
   */

/** 

   // генерирование 10 ходов с проверкой на допустимость ходов
   const gameProcess = (endIndex) => {
      //  console.log('внутри функции мы получаем переменную конечного индекса: ' + endIndex)
      for (let i = 0; i < 10; ++i) {
         // генерирование одного из 4-х направлениий хода 
         let generation = Math.floor(Math.random() * 4 + 1);
         //  console.log('получаем направление хода:  ' + generation)
         // проверка на ограницения возможности хода и корректировка         
         switch (endIndex) {
            case 1:
               if (generation === 1 || generation === 3) {
                  generation = 2;

               }
               break;
            case 2:
               if (generation === 1) {
                  generation = 2;

               }
               break;
            case 3:
               if (generation === 1 || generation === 4) {
                  generation = 2;

               }
               break;
            case 4:
               if (generation === 3) {
                  generation = 2;

               }
               break;
            case 6:
               if (generation === 4) {
                  generation = 2;

               }
               break;
            case 7:
               if (generation === 2 || generation === 3) {
                  generation = 1;

               }
               break;
            case 8:
               if (generation === 2) {
                  generation = 1;

               }
               break;
            case 9:
               if (generation === 2 || generation === 4) {
                  generation = 1;

               }
               break;
         }
         // изменение положения точки на поле
         switch (generation) {
            case 1:
               endIndex -= 3;
               generation = 'UP'
               break;
            case 2:
               endIndex += 3;
               generation = 'DOWN'
               break;
            case 3:
               endIndex -= 1;
               generation = 'LEFT'

               break;
            case 4:
               endIndex += 1;
               generation = 'RIGHT'

               break;
         }



         movies.push(generation)


      }


   }
   gameProcess(endIndex)
*/

   //захардкодим значения начального  положения точки, ходов и конечного положения точки 
   /** 



//1-ый вариант
startIndex= 5
movies=['UP','RIGHT','DOWN','DOWN','LEFT','LEFT','UP','UP','RIGHT','RIGHT']
endIndex=3
*/

//-2ой вариант
startIndex=9
movies=['UP','UP','LEFT','DOWN','RIGHT','LEFT','LEFT','UP','RIGHT','DOWN']
endIndex=5
 //  console.log('startIndex ' + startIndex)
 //  console.log('endIndex ' + endIndex)
  // console.log("Массив ходов:" + movies)
   let [errorItem, setErrorItem] = useState(false)

   const start = () => {
      dispatch({ type: FIELD, payload: movies })
      setStartGame(startgame= true)
      console.log('start!!!!')
   }

   return (
      <>
         <div className={style.btn} onClick={start}>Старт!</div>
         <div className={style.body}>
            {store.map(field => <Field
               num={field.num} // номер текущей ячейки
               startIndex={startIndex} // номер ячейки с которой начинается старт
               endIndex={endIndex} // номер ячейки на которой заканчиваются ходы 
               key={field.key}
               setErrorItemTopLvl={setErrorItem}
               errorTopLvl={errorItem}
               startgame={startgame}
            />)}
         </div>
      </>
   )
}


export default Body;
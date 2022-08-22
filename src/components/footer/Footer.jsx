import React from 'react'
import { useSelector } from 'react-redux';
import Arrow from './arrow/Arrow';
import style from './style.module.css'

const Footer = () => {
   let store = useSelector(store => store.reducerTwo)
   let arrayMovies = ['', '', '', '', '', '', '', '', '', '']

   return (
      <div className={style.body}>
         {store.state
            ?
            store.state.map(item =>
               <Arrow item={item} key={Date.now()} />)
            :
            arrayMovies.map(item => <Arrow item={item} key={item[item]} />)
         }
      </div>
   )
}


export default Footer;
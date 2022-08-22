import React from 'react'
import style from './style.css'
const Arrow = ({ item }) => {
      let image;  
   switch (item) {//настроить 
      case "UP":
         image = { background: 'url(https://cdn-icons-png.flaticon.com/512/545/545679.png) 0 0/ 100% 100%' }
         break;
      case 'RIGHT':
         image = { background: 'url(https://cdn-icons-png.flaticon.com/512/545/545682.png) 0 0/ 100% 100%' }
         break;
      case 'LEFT':
         image = { background: 'url(https://cdn-icons-png.flaticon.com/512/545/545680.png) 0 0/ 100% 100%' }
         break;
      case 'DOWN':
         image = { background: 'url(https://cdn-icons-png.flaticon.com/512/545/545678.png) 0 0/ 100% 100%' }
         break;
   }

   return (
      <div className='body' style={image}></div>
   )
}


export default Arrow
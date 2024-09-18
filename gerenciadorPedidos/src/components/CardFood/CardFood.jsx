import React from 'react'
import styles from './CardFood.module.css'


function CardFood({cardImg, nameFood, priceFood, openModal}) {
  return (
   <>
   <div className={styles.containerCard}>
    <div className={styles.cardImg} onClick={openModal}>
    <img src={cardImg} alt=""/>
    </div>
    <div className={styles.infoCard}>
        <p className={styles.Namefood}>{nameFood}</p>
      <span id={styles.priceFood}>{priceFood}</span>
    </div>

   </div>
   </>
  )
}

export default CardFood
 
import React from 'react'
import styles from './CarrouselFilter.module.css'

function CarrouselFilter( { imageSrc, text } ) {
  return (
   <div className={styles.container}>
     <div className={styles.cardCategory}>
        <img src={imageSrc} alt="Imagem" />
        <p id={styles.category}>{text}</p>
     </div>
   </div>
  )
}

export default CarrouselFilter

import styles from './Filter.module.css'
import React from 'react'

export default function Filter({handleFilter }){
  
  return (
     <div>
            <p className={styles.text}> Find contacts by name</p>
            <input type="text"            
            onChange={(e) => { handleFilter(e) }}
            />
    </div>
  )
}

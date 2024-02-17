import styles from './Filter.module.css'

import React from 'react'

export default function Filter({ filterValue, handleFilter }) {
  return (
     <div>
            <p className={styles.text}> Find contacts by name</p>
            <input type="text"
                value={filterValue}
                onChange={(e) => handleFilter(e)}
            />
           
            
        </div>
  )
}

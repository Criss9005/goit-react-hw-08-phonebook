import React, { Component } from 'react'
import styles from './Filter.module.css'

export default class Filter extends Component {
   
   
    
    render() {
        const { filterValue, handleFilter } = this.props
       
        
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
}

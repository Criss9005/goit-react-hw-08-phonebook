import React, { Component } from 'react'
import styles from './ContactForm.module.css'

export default class Form extends Component {

  state = {
    name: '',
    number: ''
  }

  handleAddNameNumber = (e, name) => {
    this.setState({ [name]: e.target.value })
  }
 

  render() {
    const { handleUpdateContacts} = this.props
    return (
        <form className={ styles.form}>
            <label className={styles.formLabel }>Name</label>
            <input
                className={styles.input}
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={this.name}
                onChange={(e)=> this.handleAddNameNumber(e, 'name')}
                required
            />
            <label className={styles.formLabel }>Number</label>
            <input className={styles.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={this.number}
                onChange={(e)=> this.handleAddNameNumber(e, 'number')}
                required
            />
          
          <button className={styles.btn } onClick={(e)=> handleUpdateContacts(e, this.state.number, this.state.name)}>Add contact</button>
        </form>
    )
  }
}

import React from 'react';
import { nanoid } from 'nanoid';
import css from './Css/ContactForm.module.css'

class ContactForm extends React.Component {
  state = {
    name: '',
    number: ''
  }

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, number } = this.state;
    const { contacts } = this.props;

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const nameExists = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (nameExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    }

    this.setState({ name: '', number: '' });
    this.props.onAddContact(newContact);
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={css.form_wrapper}>
        <p className={css.name}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
          className={css.input}
        />
        <p className={css.number}>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChange}
          className={css.input}
        />
        <br />
        <button type='submit' className={css.btn}>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

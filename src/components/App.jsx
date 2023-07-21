import React from 'react';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = (event) => {
    const {name, value} = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, number } = this.state;

    if(name.trim() === '' || number.trim() === '') {
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    }

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
      name: '',
      number: ''
    }));

  };

  

  render() {
    const { name, contacts, number } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        <button type='submit'>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <input type="text"/>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>{contact.name}: {contact.number}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;


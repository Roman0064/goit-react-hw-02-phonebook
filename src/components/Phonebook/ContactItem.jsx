import React from 'react';
import css from './Css/ContactItem.module.css'

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <li className={css.list}>
      {name}: {number}
      <button onClick={() => onDelete(id)} className={css.btn}>Delete</button>
    </li>
  );
};

class ContactList extends React.Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul className={css.wrapper}>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;

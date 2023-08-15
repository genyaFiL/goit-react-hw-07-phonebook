import css from './ContactListStyles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export default function ContactList() {
  const filterValue = useSelector(state => state.filter.value); // get value filter
  const contacts = useSelector(state => state.contacts.contactsList); // get all  contacts
  const dispatch = useDispatch(); //get actions

  const contactsFiltered = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  return (
    <ul>
      {contactsFiltered().map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className={css.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

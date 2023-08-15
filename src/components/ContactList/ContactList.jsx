import { useEffect } from 'react';
import css from './ContactListStyles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getContacts, getError, getFilter, getLoading } from 'redux/selectors';

export default function ContactList() {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const isError = useSelector(getError);

  const dispatch = useDispatch(); //get actions

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactsFiltered = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {contactsFiltered().map(({ name, phone, id }) => (
            <li key={id}>
              {name} : {phone}
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
      )}
      {contacts.length === 0 && !isLoading && (
        <p>There are no contacts in your phone book</p>
      )}
      {isError && <p>Something went wrong. An error has occurred: {isError}</p>}
    </>
  );
}

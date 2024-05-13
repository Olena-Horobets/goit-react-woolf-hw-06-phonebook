import Filter from './Filter';
import Form from './Form';
import ContactsList from './ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { removeContactAction } from 'store/contacts/slice';

function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    if (filter) {
      return contacts.filter(el => {
        return el.name.toLowerCase().includes(filter.toLocaleLowerCase());
      });
    } else {
      return contacts;
    }
  };

  const onContactDelete = id => {
    dispatch(removeContactAction(id));
  };

  const contactList = getVisibleContacts();

  return (
    <div className="container">
      <Form></Form>
      <Filter />
      {contactList.length ? (
        <ContactsList
          contacts={contactList}
          onDelete={onContactDelete}
        ></ContactsList>
      ) : (
        <p>Sorry, no contacts found </p>
      )}
    </div>
  );
}

export { App };

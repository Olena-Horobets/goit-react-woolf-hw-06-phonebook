import { useSelector } from 'react-redux';

import ContactsItem from 'components/ContactsItem';

import { selectContacts } from 'store/contacts/slice';
import { selectFilter } from 'store/filter/slice';

function ContactsList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    if (filter) {
      return contacts.filter(el => {
        return el.name.toLowerCase().includes(filter.toLocaleLowerCase());
      });
    } else {
      return contacts;
    }
  };

  const contactsList = getVisibleContacts();

  return contactsList.length ? (
    <ul>
      {contactsList.map(el => {
        return <ContactsItem key={el.id} item={el}></ContactsItem>;
      })}
    </ul>
  ) : (
    <p>Sorry, no contacts found </p>
  );
}

export default ContactsList;

import s from './ContactsItem.module.css';

import { useDispatch } from 'react-redux';

import { removeContactAction } from 'store/contacts/slice';

function ContactsItem({ item }) {
  const dispatch = useDispatch();

  const onContactDelete = id => {
    dispatch(removeContactAction(id));
  };

  return (
    <li className={s.item}>
      <p>{item.name}</p>
      <p>{item.number}</p>
      <button className="button" onClick={() => onContactDelete(item.id)}>
        Remove
      </button>
    </li>
  );
}

export default ContactsItem;

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import css from '../ContactList/ContactList.module.css';

export function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <>
      {name}: {number}
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(removeContact(id))}
      >
        Delete
      </button>
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import { Button, Wrap, Contact } from './Contacts.styled';


export const Contacts = ({ contacts, onDeleteContact  }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Wrap>
            <Contact>
              {contact.name}: {contact.number}
            </Contact>
            <Button type="button"  onClick={() => onDeleteContact(contact.id)}>
              Delete
            </Button>
          </Wrap>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
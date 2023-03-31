import PropTypes from 'prop-types';

export const FilterContacts = ({ filter, onChangeInput }) => {
  const handleChange = event => {
    onChangeInput(event.target.value);
  };
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        filter={filter}
      />
    </div>
  );
};

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};
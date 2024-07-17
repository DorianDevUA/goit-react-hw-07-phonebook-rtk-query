import { useDispatch } from 'react-redux';
import { changeContactFilter } from 'redux/contactFilterSlice';
import { LabelTitle } from './ContactFilter.styled';

const ContactFilter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    // const value = evt.target.value;
    dispatch(changeContactFilter({ value }));
  };

  return (
    <label>
      <LabelTitle>Find contacts by name:</LabelTitle>
      <input
        type="search"
        name="contactFilter"
        placeholder="Search..."
        onChange={handleChange}
      />
    </label>
  );
};

export default ContactFilter;

import { useDispatch } from 'react-redux';
import { changeContactFilter } from 'redux/contactFilterSlice';

const ContactFilter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const value = evt.target.value;
    dispatch(changeContactFilter({ value }));
  };

  return (
    <label>
      <span>Find contacts by name:</span>
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

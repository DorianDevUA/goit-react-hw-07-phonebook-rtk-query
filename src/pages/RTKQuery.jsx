import ContactItem from 'components/ContactItem';
import { useGetAllContactsQuery } from 'redux/mockApi';

const RTKQuery = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetAllContactsQuery();
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = mockApi.endpoints.getAllContacts.useQuery()
  console.log('data', data);
  console.log('error', error);
  console.log('isLoading', isLoading);

  return (
    <>
      <div>RTKQuery</div>
      <ul>
        {data?.map(contact => (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RTKQuery;

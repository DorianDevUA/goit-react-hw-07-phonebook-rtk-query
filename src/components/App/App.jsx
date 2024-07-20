import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import HomePage from 'pages/HomePage';
import PhonebookPage from 'pages/PhonebookPage';
import ContactDetailsPage from 'pages/ContactDetailsPage';
import CreateContactPage from 'pages/CreateContactPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<PhonebookPage />} />
          <Route path="contacts/:name" element={<ContactDetailsPage />} />
          <Route path="contacts/create" element={<CreateContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

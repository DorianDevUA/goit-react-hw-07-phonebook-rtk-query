import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import HomePage from 'pages/HomePage';
import TasksPage from 'pages/TasksPage';
import TaskDetailsPage from 'pages/TaskDetailsPage';
import CreateTaskPage from 'pages/CreateTaskPage';
import ContactBookPage from 'pages/ContactBookPage';
import ContactDetailsPage from 'pages/ContactDetailsPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="tasks/:Id" element={<TaskDetailsPage />} />
          <Route path="tasks/create" element={<CreateTaskPage />} />
          <Route path="contacts" element={<ContactBookPage />} />
          <Route path="contacts/:name" element={<ContactDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

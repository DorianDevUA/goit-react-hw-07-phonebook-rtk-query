import { Link } from 'react-router-dom';

const ToDoPage = () => {
  return (
    <>
      <div>This is ToDoPage</div>
      <Link to="create">Create ToDo</Link>
    </>
  );
};

export default ToDoPage;

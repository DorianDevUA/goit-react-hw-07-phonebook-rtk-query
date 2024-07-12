const TaskForm = () => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const taskTitle = form.elements.title.value;

    console.log(taskTitle);

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Enter task title..." />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default TaskForm;

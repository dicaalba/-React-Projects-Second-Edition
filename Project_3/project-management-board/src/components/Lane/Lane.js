import Task from '../Task/Task';
import './Lane.css';

function Lane({ title, loading, error, tasks }) {
  return (
    <div className="Lane-wrapper">
      <h2>{title}</h2>
      {loading || error ? (
        <span>{error || 'Loading...'}</span>
      ) : (
        tasks?.map((task) => {
          return <Task key={task.id} title={task.title} body={task.body} />;
        })
      )}
    </div>
  );
}

export default Lane;

import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="task-list-container">
      {tasks.length === 0 ? (
        <p className="empty-message">No hay tareas pendientes. ¡Descansa!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={task.id} className="task-item">
              <div className="task-content">
                <span className="task-number">{index + 1}.</span>
                <span className="task-text">{task.text}</span>
              </div>
              <button 
                onClick={() => deleteTask(task.id)} 
                className="delete-btn"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
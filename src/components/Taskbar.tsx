import React from 'react';

interface TaskbarProps {
  message?: string;
}

const Taskbar: React.FC<TaskbarProps> = ({ message = 'Hello, World!' }) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Taskbar;
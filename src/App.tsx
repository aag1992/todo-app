import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Collapse } from 'antd';
import { Todo } from './models/Todo';
import { Priority } from './models/Priority';
import { Status } from './models/TodoStatus';

const { Panel } = Collapse;

function App() {
  const initialTodos: Todo[] = [
    {
      text: 'Finish TypeScript project',
      priority: Priority.HIGH,
      description: 'Complete the TypeScript assignment for the React application.',
      status: Status.COMPLETED,
    },
    {
      text: 'Review Pull Requests',
      priority: Priority.REGULAR,
      description: 'Review the pull requests submitted by team members for the ongoing project.',
      status: Status.IN_PROGRESS,
    },
    {
      text: 'Update Documentation',
      priority: Priority.LOW,
      description: 'Update the project documentation to include new features and changes.',
      status: Status.IN_PROGRESS,
    },
  ];
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  

  const addNewTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> TODO app</h1>
        <TodoList todos={todos} />

        <Collapse>
          <Panel header="Add New Todo" key="1">
            <TodoForm addNewTodos={addNewTodo} />
          </Panel>
        </Collapse>
      </header>
    </div>
  );
}

export default App;

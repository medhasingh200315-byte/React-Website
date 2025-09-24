import React from 'react';
import { Todo } from './projects/Todo/Todo';
import './projects/Todo/Todo.css';

export const App = () => {
  return (
    <section className="container">
      <Todo />
    </section>
  );
};

export default App;
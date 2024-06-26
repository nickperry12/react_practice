import React from 'react';
import GoalList from './components/GoalList';
import './App.css';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Finish The Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'},
  ];
  // This is JSX. React specific syntax that allows us to write HTML code within
  // our JS file. This gets translated into instructions React understands.
  // It's syntactic sugar for the `React.createElement` method.
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList />
    </div>
  );
};

export default App;

import React from 'react';
import './GoalList.css';

function GoalList(props) {
  return (
    <ul className="goal_list">
      {props.goals.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })}
    </ul>
  );
}

export default GoalList;
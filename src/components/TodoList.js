/*
ToDo moveCursor
1. add todo
2. display todos
3. cross off todo
4. show number of active todos
5. filter all/active/complete
6. delete todo
7. delete all complete (only show if at least one is complete)
8. button to toggle all on/off
*/

import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todos: []
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };
  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map(todo => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </div>
    );
  }
}

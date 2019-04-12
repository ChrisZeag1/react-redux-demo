import React from 'react';
import { connect } from 'react-redux';

let nextTodoId = 0;
let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div class="row">
      <input  class="col s8" ref={node => {
        input = node;
      }} />
      <button class="waves-effect waves-light btn"
        onClick={() => {
        dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text: input.value
        })
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

AddTodo = connect()(AddTodo);

 export default AddTodo;
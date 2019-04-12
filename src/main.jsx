import React from 'react';
import { Footer } from './footer.component';
import AddTodo from './add-todo.component';
import { VisibleTodoList } from './visible-todo.component';

 export const TodoApp = () => (
  <div class="container" style={{ 'marginTop': '100px' }}>
    <h2 class="row" style={{ 'textAlign': 'center'}}>Todo list maker</h2> 
    <div class="row" style={{'marginTop': '100px' }}>
      <div class="push-s3 col s6 ">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </div>
  </div>
);

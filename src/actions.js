let nextTodoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const toDoo = id => ({
    type: 'TODOO',
    id
});

export const deleteTodo = id => ({
    type: 'REMOVE_TODO',
    id
});


export const addBlog = text =>({
    type:"ADD_BLOG",
    id: Math.random(),
    text
});


export const toBlog = id => ({
    type: 'BLOG',
    id
});

export const deleteBlog = id => ({
    type: 'REMOVE_BLOG',
    id
});














// import { useDispatch, useSelector } from 'react-redux'
// export const HANDLE_ADD = 'HANDLE_ADD';
// export const DELETE = 'DELETE';
// export const UPDATE = 'UPDATE';

// let nextTodoId = 0

// export const addTodo = text => ({
//   type: 'ADD_TODO',
//   id: Math.random(),
//   text
// })

// export const toDo = id => ({
//   type: 'TODO',
//   id
// })

// export const deleteTodo = (id) => {
//   return {
//     type: 'REMOVE_TODO',
//     id
//   }
// }









export const HANDLE_ADD = 'HANDLE_ADD';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';

// export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';



let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toDo = id => ({
  type: 'TODO',
  id
})

export const deleteContact = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}
  // export const fetchProductsSuccess = list => ({
  //   type: 'FETCH_PRODUCTS_SUCCESS',
  //   payload: { list }
  // });
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo, toDoo } from './actions'
import { useDispatch, useSelector } from 'react-redux'

const AddTodo = ({ todos }) => {
  const dispatch = useDispatch()

  const data = todos.id.reducers

  console.log(todos, 'todooooos',data)

  // const record = useSelector(state => state);
  // let input

  const [input, setInput] = useState('');

  const updateInput = input => {
    setInput(input)
  }

  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput(input)
  }


//   useEffect(() => {
//     let data = JSON.parse(localStorage.getItem('persistantState'));
//     // console.log(data,'..........................')
//   }, [])


  return (
    <>
      <div>
          

        <input onChange={(e) => updateInput(e.target.value)} value={input} />
        <button onClick={handleAddTodo}>Add</button>

      </div>

      <div>
        <h4>data</h4>
        {data ? data.map((item, index) => {
          return (
            <>
              <li>{item.text} {item.id}
                <button key={item.id} onClick={() => dispatch(deleteTodo(item.id))}>delete</button>
              </li>

            </>
          )
        }
        ) : 'no record'}

      </div>
    </>
  )
}

const mapStateToProps = (item) => {
  const todos = toDoo(item);
  return { todos };
}

export default connect(mapStateToProps, { addTodo })(AddTodo)



































// import React, { useEffect, useState } from 'react'
// import { connect } from 'react-redux'
// import { addTodo, deleteTodo, toDoo,toBlog } from './actions'
// import { useDispatch, useSelector } from 'react-redux'

// const AddTodo = ({ todos }) => {
//   const dispatch = useDispatch()

//   useEffect(()=>{

//     console.log(todos, 'todosLocal')
//   },[])


//   // const record = useSelector(state => state);
//   // let input

//   const [input, setInput] = useState('');

//   const updateInput = input => {
//     setInput(input)
//   }

//   const handleAddTodo = () => {
//     dispatch(addTodo(input));
//     setInput(input)
//   }


//   // useEffect(() => {
//   //   let data = JSON.parse(localStorage.getItem('persistantState'));
//   //   // console.log(data,'..........................')
//   // }, [])


//   return (
//     <>
//       <div>

//         <input onChange={(e) => updateInput(e.target.value)} value={input} />
//         <button onClick={handleAddTodo}>Add Item</button>

//       </div>

//       <div>
//         <h4>data</h4>
//         {/* {todos ? todos.id.reducer.map((item, index) => {
//           return (
//             <>
//               <li>{item.text}
//                 <button key={item.id} onClick={() => dispatch(deleteTodo(item.id))}>delete</button>
//               </li>

//             </>
//           )
//         }
//         ) : 'no record'} */}

//       </div>
//     </>
//   )
// }

// const mapStateToProps = (item) => {
//   const todos = toDoo(item);
//   return { todos };
// }

// export default connect(mapStateToProps, { addTodo })(AddTodo)






// let data = [];
// data = JSON.parse(localStorage.getItem('data'))
// console.log(data,'=========================')
// return data.map(todo => {
//     return (todo)
// }

// )
//  (todo.id === action.id)
// ? {...todo, completed: !todo.completed}
// : todo


{/* <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <input ref={node => input = node} />
          <button type="submit">
            Add Todo
          </button>
        </form>
        */}
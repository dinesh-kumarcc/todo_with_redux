import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addTodo, toDo } from './actions'
import { useDispatch, useSelector } from 'react-redux'

const AddTodo = ({ dispatch }) => {
  const record = useSelector(data => data);
  console.log(record, 'recordddd')

  let input



  // useEffect(()=>{

  //     list = dispatch({
  //         type:'TODO',
  //         payload:state
  //     })
  //     console.log(list,'listtttttttttttttt',state)
  // },[])


  useEffect(() => {
    // console.log(counter,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    let data = JSON.parse(localStorage.getItem('persistantState'));
    // console.log(data,'..........................')
  }, [])


  return (
    <>
      <div>
        <form onSubmit={e => {
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
        <button onClick={() => dispatch({ type: 'TODO' })} type="button">+</button>



      </div>

      <div>
        <h4>data</h4>
        {/* {record ? record.map((item,index)=>{
            return(
                <>
            <li>{item.text}
            <button onClick={()=>dispatch({type:'REMOVE_TODO'})}>delete</button>
            </li>
            
                </>
            )
        }
        ) : 'no record'} */}

      </div>
    </>
  )
}

export default connect()(AddTodo)






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

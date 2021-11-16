import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addBlog, deleteTodo, toBlog, toDo } from './actions'
import { useDispatch, useSelector } from 'react-redux'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()

  console.log(blog, 'blog')

  // const record = useSelector(state => state);
  // let input

  const [input, setInput] = useState('');

  const updateInput = input => {
    setInput(input)
  }

  const handleAddBlog = () => {
    dispatch(addBlog(input));
    setInput(input)
    console.log('blog',input)
  }


//   useEffect(() => {
//     let data = JSON.parse(localStorage.getItem('persistantState'));
//     // console.log(data,'..........................')
//   }, [])


  return (
    <>
      <div>

        <input placeholder="add blog" onChange={(e) => updateInput(e.target.value)} value={input} />
        <button onClick={handleAddBlog}>Add</button>

      </div>

      <div>
        <h4>data</h4>
        {/* {todos ? todos.id.reducer.map((item, index) => {
          return (
            <>
              <li>{item.text}
                <button key={item.id} onClick={() => dispatch(deleteTodo(item.id))}>delete</button>
              </li>

            </>
          )
        }
        ) : 'no record'} */}

      </div>
    </>
  )
}

const mapStateToProps = (item) => {
  const blog = toBlog(item);
  return { blog };
}

export default connect(mapStateToProps, { addBlog })(Blog)
// export default Blog




// import { combineReducers } from 'redux';


const reducer = (state = [], action) => {
    console.log(action, '---------------', state)
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]

        case 'TODOO':
            let data = JSON.parse(localStorage.getItem('appState'))
            console.log(data.todo, 'dataaaaaaaaaa');
            return data

        case 'REMOVE_TODO':
            let record = JSON.parse(localStorage.getItem('appState'))
            console.log(record,'deletete')
            let updatedRecords = record.filter(({ id }) => id !== action.id);
            let updatedLocal = localStorage.setItem("appState", updatedRecords)
            return updatedRecords

        // case 'REMOVE_TODO':
        //     return {
        //       ...state,
        //       state: state.items.filter((item, index) => index !== action.payload)
        //     }

        default:
            return state
    }
}

export default reducer



// const blogreducer = (blogstate = [] ,blogaction) => {
//     switch (blogaction.type) {
//         case 'ADD_BLOG':
//             console.log(blogstate,'blogstate')
//             return [
//                 ...blogstate,
//                 {
//                     id: blogaction.id,
//                     text: blogaction.text
//                 }
//             ]

//             case 'BLOG':
//                 let data = JSON.parse(localStorage.getItem('persistantState'))
//                 console.log(data, 'dataaaaaaaaaa');
//                 return data


//         default:
//             return blogstate
//     }
// }

// export default combineReducers({
//     reducer,
//     blogreducer
// })










// import { HANDLE_ADD } from "./actions";

// const initialState = {
//     note : ''
// }
  // const handleDelete = (id) => {
                //     let list = JSON.parse(localStorage.getItem('data')) || [];
                //     const updatedList = list.filter((list) => list.id !== id);
                //     const updatedRecords = userRecord.filter((record) => record.id !== id);
                //     setUserRecord(updatedRecords);
                //     localStorage.setItem('data', JSON.stringify(updatedList));
                // }
// function reducer(state = initialState, action){
//     switch(action.type){

//     }
// }

 // case 'TODO':
        //     return state.map(todo => 
        //         (todo.id === action.id) ? 
        //         {...todo, completed: !todo.completed}: 
        //         todo
        //     )  
   // case 'DELETE_ITEM':
        //     return {
        //       ...state,
        //       state: state.items.filter((item, index) => index !== action.payload)
        //     }
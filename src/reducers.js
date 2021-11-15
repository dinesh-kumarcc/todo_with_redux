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

        case 'TODO':
            let data = JSON.parse(localStorage.getItem('persistantState'))
            console.log(data, 'dataaaaaaaaaa');
            return data

        // case 'REMOVE_TODO':
        //     return state.filter(({ id }) => id !== action.id);

        default:
            return state
    }
}

export default reducer













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
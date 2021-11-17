const blogReducers = (state = [], action) => {
    console.log(action, '---------------', state)
    switch (action.type) {
        case 'ADD_BLOG':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]

        case 'BLOG':
            let data = JSON.parse(localStorage.getItem('appState'))
            console.log(data, 'dataaaaaaaaaa');
            return data

         

        default:
            return state
    }
}

export default blogReducers
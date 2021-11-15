import './App.css';
import { Provider } from 'react-redux';
import Todo from './Todo';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
  );
}

export default App;

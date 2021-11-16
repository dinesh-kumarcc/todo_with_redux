import './App.css';
import { Provider } from 'react-redux';
import Todo from './Todo';
import store from './store';
import Main from './Main';
import Blog from './Blog';

function App() {
  return (
    <Provider store={store}>
      <Todo/>
      <Main/>
      <Blog/>
    </Provider>
  );
}

export default App;

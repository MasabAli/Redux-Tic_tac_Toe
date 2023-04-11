
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Board />
      </Provider>
    </div>
  );
}

export default App;

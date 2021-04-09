import './App.css';
import {Provider} from "react-redux";
import AllUser from './components/AllUser/AllUser';
import store from './store';
import Form from './components/Form/Form';

function App() {
  return (
    <Provider store={store}>
      <Form></Form>
      <AllUser></AllUser>
    </Provider>
  );
}

export default App;


import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from './Home';

export default function App() {

 
  return (
    <Provider store={store}>
      <Home />
    </Provider>
      
  );
}


import React from 'react';
import Index from './pages/Index'
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Index />
      </div>
    </Provider>
  );
}

export default App;

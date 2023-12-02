import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";  
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(                  //set provider with store
  <React.StrictMode>
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//npm i redux 
//npm i react-redux 
//npm i @reduxjs/toolkit

//Steps:-
//create a folder 'Redux' with 'store.js(file)' & 'Reducers(folder)' within that 'tasks.reducers.js(file)'
//configure store & setting reducer inside with a key name(tasks)
//create slice with name, initialState & reducer
//export default name.reducer & name.actions with destructured implementations
//set provider with store
//setting the state/value or triggering the action with useDispatch
//passing the state in useSelector to display in UI

//Conditional rendering - tasksList && tasksList.map

//npm install --save-dev redux-devtools-extension
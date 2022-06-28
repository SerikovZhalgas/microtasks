import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewComponent from "./NewComponent";
import App2 from './App2'
import App3 from "./App3";
import App4 from "./App4";

/*const topCars = [
    {id: 1, manufacturer: 'BMW', model: 'm5cs'},
    {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
    {id: 3, manufacturer: 'Audi', model: 'rs6'}
]

const students = [
    {id: 0, name: "Arnold", age: 1},
    {id: 1, name: "Kamila", age: 2},
    {id: 2, name: "Zhalgas", age: 25},
    {id: 3, name: "Tamerlan", age: 27},
    {id: 4, name: "Chingis", age: 32},
    {id: 5, name: "Musya", age: 12},
    {id: 6, name: "Kiril", age: 15},
    {id: 7, name: "Volodya", age: 75},
    {id: 8, name: "Miras", age: 99},
    {id: 9, name: "Vanya", age: 45},
]*/

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App4/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

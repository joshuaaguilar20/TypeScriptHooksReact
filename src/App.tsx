import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
/* 
  The function takes an initial value and returns an array of arguments, 
  with the item at the 0 index containing the state value, 
  and the item at the 1 index containing a function to update the value
  --------------------------------------------------------------------------------- 
  The useEffect hook takes a function as an argument. useEffect replaces the componentDidMount, componentDidUpdate, and componentWillUnmount class methods. When the state of the component mounts or updates, 
  React will execute the callback function. If your callback function returns a function itself,
  React will execute this during componentWillUnmount
*/
interface AppProps {
  color:string;
  optional?:boolean;
}

const App: React.FC <AppProps> = (props) => {
  const [count, setCount] = useState(0);
  const [hasFetched, setFetch ] = useState(false);
  const [apiData, showData ] = useState('');
  const arr = [0,1,2,3,4,5,65,22];


  const apiStuff = {
    async apiCall(){
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let json = await res.json();
    setFetch(true)
    console.log(json);
    let str = JSON.stringify(json);
    showData(str);
  },
  test(){
    alert('Callback Function Called');
   if(!hasFetched){
    apiStuff.apiCall() 
   }   
  }
  }

  useEffect(apiStuff.test)

  return (
    <div className="App">
    <p> {props.color}</p>
    <h1>Count: {count}</h1>
    <h2>StringData: {apiData}</h2>
    {arr.map((value) => <button onClick={() => setCount(count + value)}>+{value}</button> )}
    {}
    </div>
  );
  } 

export default App;

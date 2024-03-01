import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from './redux/slices/greetingsSlice';

const App = () => {
  const dispatch = useDispatch();
  const { list, errors} = useSelector((state) => state.greetings)

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  function clickHandler() {
    dispatch(fetchGreetings());
  }

  function randomGreeting() {
    let randomIndex = Math.floor(Math.random() * list.length);
    if (list[randomIndex]) {
      return list[randomIndex].text;
    }
  }
  return (
    <div id="greeting-ctr">
      <h2 id="greeting">{randomGreeting()}</h2>
      <button type="button" onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default App;
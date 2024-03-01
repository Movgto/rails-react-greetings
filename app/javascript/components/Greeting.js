import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/slices/greetingsSlice';
import React, { useEffect } from 'react';

const Greeting = () => {
  const dispatch = useDispatch();
  const { randomGreeting } = useSelector((state) => state.greetings)

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  function clickHandler() {
    dispatch(fetchGreetings());
  }

  return (
    <div id="greeting-ctr">
      <h2 id="greeting">{randomGreeting.text}</h2>
      <button type="button" onClick={clickHandler}>Click me</button>
    </div>
  );
};

export default Greeting;
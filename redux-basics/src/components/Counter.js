import {useSelector, useDispatch} from 'react-redux'
import classes from './Counter.module.css';

import { counterActions } from '../store/counter';

const Counter = () => {
  const dispacth = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
    dispacth(counterActions.increment())
  }
  const increaseHandler = () => {
    dispacth(counterActions.increase(10 ))
  }

  const decrementHandler = () => {
    dispacth(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    dispacth(counterActions.toggleCounter())
  };

/*   
  old redux
const incrementHandler = () => {
      dispacth({type: "increment"})
  }
  const increaseHandler = () => {
      dispacth({type: "increase", amount: 5})
  }

  const decrementHandler = () => {
    dispacth({type: "decrement"})
  }
   const toggleCounterHandler = () => {
      dispacth({type: 'toggle'})
   };
 */
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}  >Increment</button>
        <button onClick={increaseHandler}  >Increase by 5</button>
        <button onClick={decrementHandler}  >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

import { useReducer } from 'react';

const initialState = { count: 0, step: 1 };

// action.type: 'icnrement', 'decrement'
// reducer - func:(state,action) => newState
const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.newStep };
    default:
      return state;
  }
};

function CounterWithReducer () {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'increment' });
    // reducer(state, ACTION)
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const setStep = e => {
    const newStep = e.target.value;
    const ACTION = { type: 'setStep', newStep: Number(newStep) };
    dispatch(ACTION);
  };

  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type='number' value={state.step} onChange={setStep} />
    </>
  );
}

export default CounterWithReducer;

import { useCallback, useState } from 'react';

const TodoList = () => {
  const [state, setState] = useState({ todos: [], text: '' });

  const setText = useCallback(e => {
    setState({ ...state, text: e.target.value });
  }, [state]);

  const addTodo = useCallback(() => {
    const text = state.text;
    setState({ text: '', todos: state.todos.concat({ text }) });
  }, [state]);
  
  return <form onSubmit={addTodo} action="javascript:" style={{ margin: "20px" }}>
    <label>
      <span>Add Todo </span>
      <input value={state.text} onInput={setText} />
    </label>
    <button type="submit">Add</button>
    <ul>
      {state.todos.map(todo =>
        <li>{todo.text}</li>
      )}
    </ul>
  </form>
}

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div style={{ margin: "20px" }}>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  )
};

interface Props {
  name: string
}

const App = (props: Props) => {
  return <div>
    <h1>{props.name}</h1>

    <Counter />

    <TodoList />

  </div>
}

export default App;

import { useState, useEffect, useCallback, useRef } from "react";
import { ITodo } from '@nx-monorepo/shared-types';
import axios from "axios";

export function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const textInputRef = useRef<HTMLInputElement>(null);

  const getTodoes = useCallback(async () => {
    const response = await axios.get<ITodo[]>('http://localhost:3333/api');
    setTodos(response.data);
  }, []);

  useEffect(() => {
    getTodoes();
  }, [getTodoes]);

  const onAddTodo = useCallback(async () => {
    if (textInputRef.current) {
      await axios.post('http://localhost:3333/api', { text: textInputRef.current.value });
      textInputRef.current.value = '';
      getTodoes();
    }

  }, [getTodoes]);

  const onToggle = useCallback(async (id: number) => {

    await axios.post('http://localhost:3333/api/setDone', {
      id,
      done: !todos.find((todo) => todo.id === id)?.done
    });
    getTodoes();
  }, [todos, getTodoes]);

  return (
    <>
      <div>
        {
          todos.map(todo => (
            <div key={todo.id}>
              <input type={'checkbox'} checked={todo.done} onChange={() => onToggle(todo.id)} />
              {todo.text}
            </div>
          ))
        }
      </div>
      <div>
        <input ref={textInputRef} />
      </div>
      <div>
        <button onClick={onAddTodo}>Add</button>
      </div>
    </>
  );
}

export default App;

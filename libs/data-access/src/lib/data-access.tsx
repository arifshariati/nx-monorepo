import { useState, useEffect, useCallback, useRef } from "react";
import { ITodo } from '@nx-monorepo/shared-types';
import axios from "axios";

export function useTodos() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodoes = useCallback(async () => {
    const response = await axios.get<ITodo[]>('http://localhost:3333/api');
    setTodos(response.data);
  }, []);

  useEffect(() => {
    getTodoes();
  }, [getTodoes]);

  const addTodo = useCallback(async (text: string) => {

    await axios.post('http://localhost:3333/api', { text });

    getTodoes();


  }, [getTodoes]);

  const toggleTodo = useCallback(async (id: number) => {

    await axios.post('http://localhost:3333/api/setDone', {
      id,
      done: !todos.find((todo) => todo.id === id)?.done
    });
    getTodoes();
  }, [todos, getTodoes]);

  return {
    todos,
    getTodoes,
    addTodo,
    toggleTodo
  };

}


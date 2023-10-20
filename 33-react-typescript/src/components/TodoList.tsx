import React, { useRef, useState } from 'react';
import { ToDoItem } from '../types/types';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const updatedTodos = [...todos, { id: Date.now(), text: newTodo, completed: false }];
    setTodos(updatedTodos); // 전체 투두에 새로운 투두 추가
    setNewTodo(''); // input 초기화
    focusInput();
  };

  const toggleComplete = (id: number) => {
    console.log(`${id}번 투두 완료 상태 수정`);

    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  // useRef로 생성한 inputRef를 사용해 입력창에 포커싱
  const focusInput = () => {
    // if (inputRef.current) {
    inputRef.current?.focus();
    // }
  };

  const keyDownEvent = (e: React.KeyboardEvent) => {
    console.log(e);
    if (e.code === 'Enter') {
      addTodo();
    }
    // console.log(e);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="add new todo!"
          ref={inputRef}
          onKeyDown={keyDownEvent}
        />
        <button onClick={addTodo}>ADD</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
}

import { ToDoItem } from '../types/types';

interface Props {
  todo: ToDoItem;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <label htmlFor="">
        <input type="checkbox" defaultChecked={todo.completed} onChange={() => toggleComplete(todo.id)} />
        {todo.text}
      </label>
    </li>
  );
}

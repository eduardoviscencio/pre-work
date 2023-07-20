import type { Todo } from '../../types/Todo.type'

import styles from './TodoItem.module.css'

type TodoParams = {
  todo: Todo
  onToggle: (todoId: number) => void
}

const TodoItem = ({ todo, onToggle }: TodoParams): JSX.Element => {
  const handleOnToggle = () => {
    onToggle(todo.id!)
  }

  return (
    <div className={`${styles.todo} ${todo.completed && styles.todoCompleted}`}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={handleOnToggle}
      />
      <span>{todo.title}</span>
    </div>
  )
}

export default TodoItem

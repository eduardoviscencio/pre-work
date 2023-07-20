import type { Todo } from '../../types/Todo.type'

import AddTodo from '../AddTodo'
import TodoItem from '../TodoItem'

import { useTodoList } from './hooks/useTodoList'

import styles from './TodoList.module.css'

const TodoList = (): JSX.Element => {
  const { todos, addTodo, toggleTodo } = useTodoList()

  return (
    <div className={styles.todoListContainer}>
      <AddTodo onAdd={addTodo} />
      <div className={styles.todosContainer}>
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </div>
    </div>
  )
}

export default TodoList

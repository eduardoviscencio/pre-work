import { useRef, useState } from 'react'
import type { Todo } from '../../types/Todo.type'

import styles from './AddTodo.module.css'

type AddTodoParams = {
  onAdd: (newTodo: Todo) => void
}

const AddTodo = ({ onAdd }: AddTodoParams): JSX.Element => {
  const [label, setLabel] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLabel(e.target.value)

  const handleOnAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (!label) return

    const newTodo: Todo = {
      userId: 1,
      title: label,
      completed: false
    }

    onAdd(newTodo)

    if (inputRef.current) {
      inputRef.current.value = ''
    }

    setLabel('')
  }

  return (
    <form className={styles.form} onSubmit={handleOnAdd}>
      <input
        className={styles.inputText}
        ref={inputRef}
        placeholder='New todo...'
        onChange={handleOnChange}
      />
      <button className={styles.addBtn}>Create</button>
    </form>
  )
}

export default AddTodo

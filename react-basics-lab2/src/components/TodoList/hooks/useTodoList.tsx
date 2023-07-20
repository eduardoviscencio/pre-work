import { useEffect, useState } from 'react'
import type { Todo } from '../../../types/Todo.type'

// const initialTodos: Todo[] = [
//   {
//     id: 1,
//     userId: 1,
//     title: 'Do homework',
//     completed: true
//   },
//   {
//     id: 2,
//     userId: 1,
//     title: 'Clean the desktop',
//     completed: false
//   }
// ]

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const fetchInitialTodos = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_page=1&_limit=5'
        )

        const data: Todo[] = await response.json()

        setTodos(data)
      } catch (e) {
        console.log(e)
      }
    }

    fetchInitialTodos()
  }, [])

  useEffect(() => {
    console.log(`Total of todo's: ${todos.length}`)
  }, [todos.length])

  const addTodo = (newTodo: Todo): void => {
    setTodos(prevTodos => [
      ...prevTodos,
      { ...newTodo, id: prevTodos.length + 1 }
    ])
  }

  const toggleTodo = (todoId: number): void => {
    setTodos(prevTodos =>
      prevTodos.map((prevTodo: Todo) =>
        todoId === prevTodo.id
          ? {
              ...prevTodo,
              completed: !prevTodo.completed
            }
          : prevTodo
      )
    )
  }

  return {
    todos,
    addTodo,
    toggleTodo
  }
}

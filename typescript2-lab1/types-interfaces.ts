type Person = {
  name: string
  age: number
  email: string
}

const person: Person = {
  name: 'Eduardo',
  age: 26,
  email: 'eduardoviscencio.dev@gmail.com'
}

interface Book {
  title: string
  author: string
  pages: number
}

const books: Book[] = [
  {
    title: 'Clean JavaScript',
    author: 'Miguel A. Gómez',
    pages: 100
  },
  {
    title: 'Clean Architecture',
    author: 'Uncle Bob',
    pages: 100
  },
  {
    title: 'Fundamentos de programación',
    author: 'Luis Joyanes',
    pages: 100
  }
]

const displayBookInfo = (book: Book): void => {
  console.log(book.title)
  console.log(book.author)
  console.log(book.pages)
}

books.forEach(book => displayBookInfo(book))

class Shape {
  color: string

  constructor (color: string) {
    this.color = color
  }

  getArea () {
    throw 'NotImplementedError'
  }
}

class Circle extends Shape {
  radius: number

  constructor (color: string, radius: number) {
    super(color)
    this.radius = radius
  }

  getArea (): number {
    let area: number = Math.PI * this.radius ** 2

    return area
  }
}

class Rectangle extends Shape {
  width: number
  height: number

  constructor (color: string, width: number, height: number) {
    super(color)
    this.width = width
    this.height = height
  }

  getArea (): number {
    let area: number = this.width * this.height

    return area
  }
}

const circle = new Circle('red', 5)
console.log(circle.getArea())

const rectangle = new Rectangle('blue', 4, 6)
console.log(rectangle.getArea())

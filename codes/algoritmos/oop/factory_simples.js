// Factory simples — exemplo de fábrica que cria diferentes formas
// Nível: intermediário

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class ShapeFactory {
  static create(type, options) {
    switch ((type || '').toLowerCase()) {
      case 'circle':
        return new Circle(options.radius);
      case 'rectangle':
        return new Rectangle(options.width, options.height);
      default:
        throw new Error('Tipo de shape desconhecido: ' + type);
    }
  }
}

const c = ShapeFactory.create('circle', { radius: 3 });
console.log('Circle area (r=3) =', c.area());
const r = ShapeFactory.create('rectangle', { width: 4, height: 5 });
console.log('Rectangle area (4x5) =', r.area());

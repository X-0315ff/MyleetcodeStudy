function Person() {
  // 此处定义同名方法 sayHi
  this.sayHi = function () {
    console.log('嗨!' + this.name)
  }
}

// 为构造函数的原型对象添加方法
Person.prototype.sayHi = function () {
  console.log('Hi~' + this.name)
}
// 在构造函数的原型对象上添加属性
Person.prototype.name = '小明'

let p1 = new Person()
p1.sayHi(); // 输出：嗨!小明

let p2 = new Person()
p2.name = '小红'
p2.sayHi() // 输出：嗨!小红

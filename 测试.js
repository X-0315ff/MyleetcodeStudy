let a = [1, 2, new Set([3, 4]), [5], [6, [7, 8]]]
console.log(a.flat(), 111) // 不加参数默认是1
console.log(a.flat(0), 222) // 相当于浅拷贝
console.log(a.flat(2), 333)   
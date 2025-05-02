const User = {
  name : 'Jeryy',
  age : 19,
  lovefort : 'lanmei'
}


// for...in : 循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
for(let i in User){
  console.log(i);
// name
// age
// lovefort
}

//（2）Object.keys(obj) : 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
const arr1 = Object.keys(User)
console.log('arr1 = ',arr1 );  // [ 'name', 'age', 'lovefort' ]

// （3）Object.getOwnPropertyNames(obj) : 返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
const arr2 = Object.getOwnPropertyNames(User)
console.log('arr2 = ',arr2 ); // [ 'name', 'age', 'lovefort' ]


// （4）Object.getOwnPropertySymbols(obj) : 返回一个数组，包含对象自身的所有 Symbol 属性的键名。
const arr3 = Object.getOwnPropertySymbols(User)
console.log('arr3 = ',arr3 );

// （5）Reflect.ownKeys(obj) : Reflect.ownKeys返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
const arr4 = Reflect.ownKeys(User)
console.log('arr4 = ',arr4);



function greet(message, punct) {
    console.log(message + ', ' + this.name + punct);
}

const person = {
    name: '张三'
};

const args = ['你好', '!'];
greet.apply(person, args); // 输出: 你好, 张三!

// 常见用法：将数组元素作为参数传递给函数
const numbers = [10, 20, 5, 30, 15];
const max = Math.max.apply(null, numbers); // null表示不关心this指向，或者指向全局
console.log(max); // 输出: 30

function greet(message, punct) {
    console.log(message + ', ' + this.name + punct);
}
const person = {
    name: '张三'
};
const anotherPerson = {
    name: '李四'
};
greet.call(person, '你好', '!');     // 输出: 你好, 张三!
greet.call(anotherPerson, 'Hello', '.'); // 输出: Hello, 李四.

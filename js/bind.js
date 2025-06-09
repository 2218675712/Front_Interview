function greet(message, punct) {
    console.log(message + ', ' + this.name + punct);
}

const person = {
    name: '张三'
};

// 绑定 this，不立即执行
const greetPerson = greet.bind(person);
greetPerson('你好', '!'); // 输出: 你好, 张三!

// 即使再次尝试改变 this，也无效
const anotherPerson = {
    name: '李四'
};
greetPerson.call(anotherPerson, 'Hi', '?'); // 仍然输出: 你好, 张三! （this 依然是 person）

// 参数预设（柯里化）
const sayHelloToPerson = greet.bind(person, 'Hello');
sayHelloToPerson('!'); // 输出: Hello, 张三!

const sayHiToPerson = greet.bind(person, 'Hi', '!!!');
sayHiToPerson(); // 输出: Hi, 张三!!!

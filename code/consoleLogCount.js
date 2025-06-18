// 设计一个函数，奇数次执行的时候打印 1，偶数次执行的时候打印 2

const customLog = () => {
    let count = 0
    return function (msg) {
        count++
        const isEven = count % 2 === 0
        console.log('msg', msg, 'isEven', isEven ? 2 : 1)

    }


}
const customLogFn = customLog()


customLogFn('第1次')
customLogFn('第2次')
customLogFn('第3次')
customLogFn('第4次')
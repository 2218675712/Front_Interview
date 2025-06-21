const curry = (fn) => {

    return function curried (...args2) {
        if (args2.length >= fn.length) {
            return fn.apply(this, args2)
        }else {
            return function (...args3) {
                return curried.apply(this,[...args2,...args3])
            }
        }

    }

}

// 指将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)。
function sum(a, b) {
    return a + b;
}

const currySum = curry(sum)

console.log('sumtotal', currySum(1)(2),currySum(1,2))
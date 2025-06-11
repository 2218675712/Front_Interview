function add(a, b, c) {
    return a + b + c
}

const curry = (fn, ...arguments) => {
    if (arguments.length < fn.length) {
        return (...args) => curry(fn, ...arguments, ...args)
    } else {
        return fn(...arguments)
    }
}
curry(add)(1)(2)(3)
curry(add, 1)(2)(3)
curry(add, 1, 2)(3)
curry(add, 1, 2, 3)
const debounceFn = (fn, waitTime = 1000) => {
    let time = null
    return function () {
        if (time) {
            clearTimeout(time)
        }
        time = setTimeout(() => {
            fn.apply(this, arguments)
            time = null

        }, waitTime)
    }
}

const newFn = debounceFn(() => {
    console.log('123', 123)
}, 3000)
newFn()
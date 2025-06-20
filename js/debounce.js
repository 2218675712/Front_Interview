const debounceFn = (fn, waitTime = 1000) => {
    let time = null
    return function (...args) {
        if (time) {
            clearTimeout(time)
        }
        time = setTimeout(() => {
            console.log('args',args)
            fn.apply(this, args)
            time = null

        }, waitTime)
    }
}

const newFn = debounceFn(() => {
    console.log('123', 123)
}, 3000)
newFn('336699')
const throttleFn = (fn, waitTime = 1000) => {
    let time = null
    return function (...args) {
        if (time) {
           return
        }
        time = setTimeout(() => {
            console.log('args',args)
            fn.apply(this, args)

            time = null

        }, waitTime)
    }
}

const newFn = throttleFn(() => {
    console.log('123', 123)
}, 3000)
newFn('336699')
const throttleFn = (fn, waitTime = 1000) => {
    let time = null
    return function () {
        if (time) {
           return
        }
        time = setTimeout(() => {
            fn.apply(this, arguments)

            time = null

        }, waitTime)
    }
}

const newFn = throttleFn(() => {
    console.log('123', 123)
}, 3000)
newFn()
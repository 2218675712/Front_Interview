function repeat(func, times, wait) {
    return async function (...args) {
        for (let i = 0; i < times; i++) {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    func.apply(this, args)
                    resolve()
                }, wait)
            })
        }
    }
}

const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc('hellworld')
// 调用这个 repeatFunc ("hellworld")，会log 4次 helloworld, 每次间隔3秒
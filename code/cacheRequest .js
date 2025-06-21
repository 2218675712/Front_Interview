function cacheRequest() {
    const cacheMap = new Map()
    return async function (url, options) {
        if (!cacheMap.has(url)) {
            try {
                const res = await fetch(url, options)
                if (res.ok) {
                    cacheMap.set(url, res.json())
                    return res.json()
                } else {
                    console.warn('响应出错了', res)
                }
            } catch (e) {
                throw Error(`出错了，请检查${e}`)
            }

        } else {
            return {
                ...cacheMap.get(url),
                cache: true
            }
        }
    }


}

const cRequest = cacheRequest()

async function fetchUrl() {
    const a1 = await cRequest('http://www.baidu.com', {})
    const a2 = await cRequest('http://www.baidu.com', {})
    const a3 = await cRequest('http://www.google.com', {})
    const a4 = await cRequest('http://www.bing.com', {})
    const a5 = await cRequest('http://www.h123.com', {})
    console.log('promise', a1, a2, a3, a4, a5)
}
// 请实现一个 cacheRequest 方法，保证发出多次同一个 ajax 请求时都能拿到数据，而实际上只发出一次请求
fetchUrl()
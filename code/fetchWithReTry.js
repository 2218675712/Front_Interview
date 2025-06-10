const fetchWithRetry = async (url, options = {}, retryOptions = {}) => {
    const {maxRetries = 3, delay = 1000} = retryOptions
    // 当前记录次数
    let nowCounts = 0
    while (nowCounts <= maxRetries) {
        try {
            const response = await fetch(url, options)
            if (response.ok) {
                return response
            }

            if (response.status === 500) {
                if (nowCounts <= maxRetries) {
                    // 暂停2秒
                    await new Promise((resolve, reject) => setTimeout(() => resolve, delay))
                    nowCounts++
                } else {
                    throw new Error('达到最大重试次数')
                }

            } else {
                throw new Error('出现其他请求错误')
            }
        } catch (error) {
            console.warn('请求因为其他异常失败了')
            await new Promise(resolve => setTimeout(resolve, delay));
            nowCounts++

        }
    }

}

async function testMyUrl() {
    const data = await fetchWithRetry('', {
        body: {}
    }).json()
    return data
}
testMyUrl()
function parseDate(date) {
    const minute = 60
    const hour = minute * 60
    const day = hour * 24
    const month = day * 31

    const dateStamp = date.getTime() / 1000
    const nowDateStamp = new Date().getTime() / 1000
    const intervalStamp = nowDateStamp - dateStamp
    if (intervalStamp >= month) {
        const _month = (intervalStamp / month).toFixed(0)
        return `${_month}月前`
    } else if (intervalStamp >= day) {
        const _day = (intervalStamp / day).toFixed(0)

        return `${_day}天前`

    } else if (intervalStamp >= hour) {
        const _hour = (intervalStamp / hour).toFixed(0)

        return `${_hour}小时前`
    } else if (intervalStamp >= minute) {
        const _minute = (intervalStamp / minute).toFixed(0)

        return `${_minute}分钟前`
    }
    const _second = intervalStamp.toFixed(0)
    return `${_second}秒前`
}

// 输入一个日期 返回几秒前、几小时前、几天前、几月前
console.log('parseDate', parseDate(new Date(1750514228741)))
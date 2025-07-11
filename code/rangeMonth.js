// 给定起止日期，返回中间的所有月份
const rangeMonthFn_V2 = (time1, time2) => {
    let [startYear, startMonth] = time1.split('-').map(Number);
    let [endYear, endMonth] = time2.split('-').map(Number);

    // 如果起始时间大于结束时间，则交换它们
    // 如果起始时间大于结束时间，则交换它们 (已修正)
    if (startYear > endYear || (startYear === endYear && startMonth > endMonth)) {
        console.warn("起始日期晚于结束日期，已自动交换。");
        // 使用单行解构赋值来正确交换
        [startYear, startMonth, endYear, endMonth] = [endYear, endMonth, startYear, startMonth];
    }

    const rangeMonth = [];
    for (let i = startYear; i <= endYear; i++) {
        // 计算当前年份的起始和结束月份
        const monthStart = (i === startYear) ? startMonth + 1 : 1;
        const monthEnd = (i === endYear) ? endMonth - 1 : 12;

        for (let j = monthStart; j <= monthEnd; j++) {
            // 使用 padStart 格式化月份为两位数
            rangeMonth.push(`${i}-${String(j).padStart(2, '0')}`);
        }
    }
    console.log('rangeMonth_V2', rangeMonth);
    return rangeMonth;
};

// 测试
rangeMonthFn_V2('2017-8', '2019-6');
// 输出: ["2017-09", "2017-10", "2017-11", "2017-12", "2018-01", ..., "2019-05"]

//另一种思路
// 我们不把日期看作是（年，月）的二维坐标，而是将其转换为一个从某个基准点（比如公元0年0月）开始计算的总月份数。这样一来，问题就从处理复杂的日期进位，变成了简单的一维数字遍历。
const rangeMonthFn_byTotalMonths = (time1, time2) => {
    const [startY, startM] = time1.split('-').map(Number);
    const [endY, endM] = time2.split('-').map(Number);
    // 转换为总月份（这里 month 从 1 开始，为了计算方便可以先减 1）
    const toTotalMonths = (y, m) => y * 12 + (m - 1);

    // 从总月份转换回 [year, month]
    const fromTotalMonths = (total) => {
        const year = Math.floor(total / 12);
        const month = (total % 12) + 1;
        return [year, month];
    };
    const startTotal = toTotalMonths(startY, startM);
    const endTotal = toTotalMonths(endY, endM);

    if (startTotal >= endTotal -1) {
        return []; // 没有中间月份
    }
    const rangeMonth = [];
    for (let i = startTotal + 1; i < endTotal; i++) {
        const [year, month] = fromTotalMonths(i);
        rangeMonth.push(`${year}-${String(month).padStart(2, '0')}`);
    }
    console.log('rangeMonth_byTotalMonths', rangeMonth);
    return rangeMonth;
}
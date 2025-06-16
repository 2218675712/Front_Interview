function compareVersion(version1, version2) {
    // 1. 预处理：去除首尾空格，并按 '.' 分割成数组
    const v1Parts = version1.trim().split('.');
    const v2Parts = version2.trim().split('.');
    const length = Math.max(v1Parts.length, v2Parts.length)
    // 按尾数进行比较
    for (let i = 0; i < length; i++) {
        const num1 = Number(v1Parts[i]) || 0;
        const num2 = Number(v2Parts[i]) || 0;
        if (num1 > num2) {
            return 1
        } else if (num1 < num2) {
            return -1
        }
    }
    return 0

}

/*
如果version1 > version2，返回1；如果version1 < version2，返回-1，其他情况返回0
版本号规则x.y.z，xyz均为大于等于0的整数，至少有x位
示例：
compareVersion('0.1', '1.1.1'); // 返回-1
compareVersion('13.37', '1.2 '); // 返回1
compareVersion('1.1', '1.1.0'); // 返回0
*/

// --- 测试用例 ---
console.log(`'0.1' vs '1.1.1'  => ${compareVersion('0.1', '1.1.1')}`);   // 预期: -1
console.log(`'13.37' vs '1.2 '  => ${compareVersion('13.37', '1.2 ')}`); // 预期: 1
console.log(`'1.1' vs '1.1.0'   => ${compareVersion('1.1', '1.1.0')}`);   // 预期: 0
console.log(`'1.0.1' vs '1'     => ${compareVersion('1.0.1', '1')}`);     // 预期: 1
console.log(`'7.5.2.4' vs '7.5.3' => ${compareVersion('7.5.2.4', '7.5.3')}`); // 预期: -1
console.log(`'1.0' vs '1'       => ${compareVersion('1.0', '1')}`);       // 预期: 0
console.log(`'3.3' vs '3.3.1'       => ${compareVersion('2.3', '3.3.1')}`);       // 预期: -1
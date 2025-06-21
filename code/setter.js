let setter = function (obj, path, value) {
    const keys = path.split('.');
    let current = obj; // current 引用当前遍历到的对象

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]; // 当前的键段

        if (i === keys.length - 1) { // 如果是最后一个键
            current[key] = value; // 直接赋值
        } else { // 如果是中间键
            // 检查当前键对应的值是否是对象，如果不是或者不存在，就创建一个新的空对象
            if (typeof current[key] !== 'object' || current[key] === null) {
                current[key] = {};
            }
            // 移动到下一个层级
            current = current[key];
        }
    }
};
let setterRecursive = function (obj, path, value) {
    const keyArr = path.split('.');
    const currentKey = keyArr[0]; // 获取第一个键段 (例如 "a", "b", "c")
    if (keyArr.length === 1) {
        // 如果只剩一个键，直接赋值
        obj[currentKey] = value;
    } else {
        // 如果还有多层
        // 检查当前键对应的值是否是对象，如果不是或者不存在，就创建一个新的空对象
        if (typeof obj[currentKey] !== 'object' || obj[currentKey] === null) {
            obj[currentKey] = {};
        }
        // 递归调用，传入下一层对象和剩余的路径
        setterRecursive(obj[currentKey], keyArr.slice(1).join('.'), value);
    }
};

let n = {
    a: {
        b: {
            c: {d: 1},
            bx: {y: 1},
        },
        ax: {y: 1},
    },
};

// --- 测试 ---

// 1. 修改现有值 (a.b.c.d)
setter(n, "a.b.c.d", 3);
console.log(n.a.b.c.d); // Output: 3 (Correct)

// 2. 修改现有值 (a.b.bx.y) - 修正了原来的目标
setter(n, "a.b.bx.y", 1);
console.log(n.a.b.bx.y); // Output: 1 (Correct)

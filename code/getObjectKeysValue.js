const isObject=(val)=>Object.prototype.toString.call(val)=== '[object Object]'
// 请写一个函数，输出出多级嵌套结构的 Object 的所有 key 值
const getObjectKeysValue = (params) => {
    let keys = []; // 在函数内部定义一个局部数组，用于收集结果


    if (isObject(params)){
        Object.entries(params).forEach(([key,value])=>{
            if (isObject(value)){
                // getObjectKeysValue(value)
                // 如果是纯对象，递归调用，并将递归的结果合并到当前 keys 数组中
                keys.push(...getObjectKeysValue(value));
            }else {
                // 如果不是纯对象，则将当前 key 添加到 keys 数组
                keys.push(key);
            }
        })
    }
    return keys

}
const obj = {
    a: "12",
    b: "23",
    first: {
        c: "34",
        d: "45",
        second: {e: "56", f: "67", three: {g: "78", h: "89", i: "90"}},
    },
};

console.log(getObjectKeysValue(obj))
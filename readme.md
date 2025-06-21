# 面试刷题

仓库收集了刷题的常见题目和实际面试过程中遇见的问题
## 目录结构

### 浏览器相关知识

浏览器内部机制、缓存策略等内容。

- [浏览器缓存机制](brower/%20浏览器缓存机制.md) - 详细介绍强制缓存与协商缓存的工作原理、区别和使用场景

### JavaScript 核心概念

JavaScript 核心概念的理解和手写实现。

- [call 方法实现](js/call.js) - 演示 JavaScript 中 call 方法的使用方式
- [apply 方法实现](js/apply.js) - JavaScript apply 方法的实现和使用示例
- [bind 方法实现](js/bind.js) - JavaScript bind 方法的实现和使用示例
- [深拷贝实现](js/deepClone.js) - JavaScript 对象深拷贝的实现方法
- [冒泡排序](js/bubbleSort.js) - 冒泡排序算法的 JavaScript 实现
- [函数柯里化实现](js/curry.js) - 函数柯里化的实现
- [函数柯里化实现（另一种方式）](js/curry2.js) - 函数柯里化的另一种实现
- [防抖函数实现](js/debounce.js) - 防抖函数的实现
- [节流函数实现](js/throttle.js) - 节流函数的实现
- [IntersectionObserver封装示例](js/IntersectionObserver.js) - 展示如何使用IntersectionObserver API
- [JavaScript 索引](js/index.md) - JavaScript 相关内容索引

### React 开发

React 框架的核心概念、组件模型和最佳实践。

- [函数组件与 Class 组件的区别](react/React中的函数组件与Class%20组件的区别.md) - 详细比较 React 中函数组件和 Class 组件的异同
- [父子组件 useEffect 执行顺序](react/react父组件嵌套子组件useEffect执行顺序.md) - 解析 React 父子组件中 useEffect 钩子的执行顺序和原理
- [倒计时钩子](react/hooks/useCountdown.jsx) - 实现一个倒计时的React钩子
- [React 索引](react/index.md) - React 相关内容索引

### 实用代码示例

常见编程场景的实现示例。

- [带重试机制的 fetch 函数](code/fetchWithReTry.js) - 实现一个具有自动重试功能的网络请求函数
- [事件总线实现](code/eventBus.js) - 实现一个简单的事件总线，支持事件的订阅与发布
- [版本号比较函数](code/compareVersion.js) - 实现一个比较两个版本号大小的函数
- [缓存请求函数](code/cacheRequest.js) - 实现一个可以缓存请求结果的函数
- [控制台日志计数](code/consoleLogCount.js) - 一个会记录日志次数的控制台日志函数
- [获取嵌套对象的所有键值](code/getObjectKeysValue.js) - 输出多级嵌套Object的所有key值
- [日期解析函数](code/parseDate.js) - 日期解析的实现
- [月份范围生成](code/rangeMonth.js) - 生成两个日期之间的月份范围
- [重复执行函数](code/repeat.js) - 重复执行函数指定次数，每次间隔固定时间
- [对象属性设置器](code/setter.js) - 通过路径字符串设置嵌套对象属性
- [二叉树路径和](code/treeNodeSum.js) - 计算二叉树所有路径的和

## 使用方法

1. 克隆本仓库以便离线阅读
2. 按需查阅相关知识点和代码实现
3. 可用于前端开发学习和面试准备

## 许可证

MIT

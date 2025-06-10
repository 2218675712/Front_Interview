# **React 中的函数组件与 Class 组件的区别**

## 定义方式

### <span data-type="text" style="white-space-collapse: break-spaces;">class组件</span><br/>

1. class组件用es6 class定义，要继承React.Component
2. 函数式组件要有render

### 函数式组件

1. 使用js函数定义
2. 接收返回的jsx

## 状态管理

### class组件

使用`this.state` `this.setState()`来存储、更新状态

### 函数式组件

通过 `useState` Hook，管理状态

## 生命周期方法 / 副作用

### **Class 组件**

- 提供了一系列内置的生命周期方法，如 `componentDidMount` (组件挂载后), `componentDidUpdate` (组件更新后), `componentWillUnmount` (组件卸载前), `shouldComponentUpdate` (性能优化), `getDerivedStateFromProps` 等。

### **函数组件**

通过 `useEffect` Hook，函数组件可以处理副作用，并模拟 Class 组件的生命周期行为。

## 总结与选择建议

| 特性 / 方面 | Class 组件                              | 函数组件 (带 Hooks)              |
| ------------- | ----------------------------------------- | ---------------------------------- |
| **定义方式**            | `class MyComp extends React.Component { render() { ... } }`                                        | `function MyComp(props) { ... }` 或 `const MyComp = (props) => { ... }`                             |
| **状态管理**            | `this.state`, `this.setState()`                                      | `useState` Hook                            |
| **生命周期 / 副作用**            | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 等                                 | `useEffect` Hook (模拟所有生命周期行为)     |
| **`this`** **关键字**           | 存在，需要注意绑定                      | 不存在 `this` 实例，更简洁             |
| **性能优化**            | `React.PureComponent`, `shouldComponentUpdate`                                      | `React.memo`, `useCallback`, `useMemo`                             |
| **可读性 / 简洁性**            | 相对冗长，逻辑分散                      | 更简洁，逻辑聚合，易于理解和维护 |
| **逻辑复用**            | HOCs, Render Props (可能导致嵌套)       | **自定义 Hooks** (更优雅，无额外嵌套)            |
| **使用场景**            | 旧项目维护、错误边界 (Error Boundaries) | **所有新项目和大部分现有项目的重构**                                 |

**在现代 React 开发中，函数组件与 Hooks 是推荐的实践。**
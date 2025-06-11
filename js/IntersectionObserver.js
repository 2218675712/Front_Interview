// 注册视口事件
const io=new IntersectionObserver(()=>{},{

})
//
// 监听id是否在视口中
io.observe(document.getElementById('id1'))
// 取消监听
io.unobserve(document.getElementById('id1'))
// 注销事件
io.disconnect()
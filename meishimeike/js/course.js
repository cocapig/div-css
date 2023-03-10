//动态为根元素设置字体大小
function init () {
 // 获取屏幕宽度
 var width = document.documentElement.clientWidth
 // 设置根元素字体大小。此时为宽的10等分
 document.documentElement.style.fontSize = width / 10 + 'px'
}

//首次加载应用，设置一次
init()
// 监听手机旋转的事件的时机，重新设置
window.addEventListener('orientationchange', init)
// 监听手机窗口变化，重新设置
window.addEventListener('resize', init)

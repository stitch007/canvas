const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')
// 关闭路径后绘制
context.beginPath()
context.arc(100, 100, 60, 0, Math.PI)
context.closePath()
context.stroke()
// 关闭路径前绘制
context.beginPath()
context.arc(250, 100, 60, 0, Math.PI)
context.stroke()
context.closePath()
// 填充
context.beginPath()
context.arc(400, 100, 60, 2, Math.PI * 2)
context.closePath()
context.fill()

const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

context.beginPath()
// 顺时针 计数器 +1
context.arc(150, 150, 50, 0, Math.PI * 2)
// 逆时针 计数器 -1 而它又经过外层圆 外层圆的计数器为 1 最终内层的值为 0 所以不会被填充
context.arc(150, 150, 25, 0, Math.PI * 2, true)
context.fill()

context.beginPath()
// 顺时针
context.moveTo(250, 100)
context.lineTo(400, 100)
context.lineTo(400, 200)
context.lineTo(250, 200)
context.lineTo(250, 100)
// 逆时针
context.moveTo(300, 125)
context.lineTo(300, 175)
context.lineTo(350, 175)
context.lineTo(350, 125)
context.lineTo(300, 125)
context.fill()

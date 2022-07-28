const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

context.fillStyle = '#a29bfe'
context.save()
context.save()

// 原点变成(50, 50)
context.translate(50, 50)
context.fillRect(0, 0, 100, 50)

context.restore()
// 逆时针旋转 30°
context.rotate(-Math.PI / 6)
context.fillRect(100, 200, 50, 50)

context.restore()
// x轴缩放2倍，y轴不变
context.scale(2, 1)
context.fillRect(150, 200, 50, 50)

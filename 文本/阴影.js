const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

context.font = '50px consolas'
// 设置阴影颜色
context.shadowColor = '#cccccc'
// 设置填充颜色
context.fillStyle = '#ee7934'
// X轴上的阴影
context.shadowOffsetX = 10
// Y轴上的阴影
context.shadowOffsetY = 10
// 阴影的模糊程度
context.shadowBlur = 5
context.fillText('Hi Canvas !', 100, 50)
context.fillRect(100, 100, 200, 60)
context.shadowOffsetX = -10
context.shadowOffsetY = -10
context.shadowBlur = 5
context.fillText('Hi Canvas !', 100, 250)

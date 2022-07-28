const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

context.lineWidth = 10

context.beginPath()
context.setLineDash([10])
context.moveTo(50, 50)
context.lineTo(450, 50)
context.stroke()

context.beginPath()
context.setLineDash([10, 20])
context.moveTo(50, 150)
context.lineTo(450, 150)
context.stroke()

context.beginPath()
context.setLineDash([20, 5, 10])
context.moveTo(50, 230)
context.lineTo(450, 230)
context.stroke()

context.beginPath()
context.setLineDash([20, 5, 10])
context.lineDashOffset = 10
context.moveTo(50, 270)
context.lineTo(450, 270)
context.stroke()

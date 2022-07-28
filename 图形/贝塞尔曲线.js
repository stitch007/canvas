const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

context.beginPath()
context.moveTo(50, 50)
context.quadraticCurveTo(150, 150, 200, 50)
context.stroke()

context.beginPath()
context.moveTo(280, 100)
context.bezierCurveTo(380, 20, 400, 290, 480, 250)
context.stroke()

const drawDot = (x, y) => {
  context.beginPath()
  context.arc(x, y, 3, 0, Math.PI * 2)
  context.fill()
}

context.fillStyle = 'red'
drawDot(50, 50)
drawDot(150, 150)
drawDot(200, 50)
drawDot(280, 100)
drawDot(380, 20)
drawDot(400, 290)
drawDot(480, 250)

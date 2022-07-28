const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

context.beginPath()
context.moveTo(50, 20)
context.lineTo(450, 20)
context.stroke()

context.beginPath()
context.lineWidth = 6
context.lineCap = 'square'
context.moveTo(50, 60)
context.lineTo(450, 60)
context.stroke()

context.beginPath()
context.lineWidth = 18
context.lineCap = 'round'
context.moveTo(50, 100)
context.lineTo(450, 100)
context.stroke()

context.beginPath()
context.lineJoin = 'round'
context.moveTo(50, 150)
context.lineTo(150, 150)
context.lineTo(200, 250)
context.stroke()

context.beginPath()
context.lineJoin = 'bevel'
context.moveTo(250, 250)
context.lineTo(300, 150)
context.lineTo(400, 150)
context.stroke()

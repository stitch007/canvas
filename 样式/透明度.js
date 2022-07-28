const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

context.beginPath()
context.fillStyle = 'rgba(192, 168, 100, 0.25)'
context.fillRect(50, 40, 200, 100)

context.beginPath()
context.strokeStyle = 'rgba(10, 10, 10, 0.25)'
context.strokeRect(50, 160, 200, 100)

context.beginPath()
context.globalAlpha = 0.25
context.fillStyle = 'green'
context.arc(380, 150, 80, 0, Math.PI * 2)
context.fill()

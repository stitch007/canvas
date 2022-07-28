const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

context.fillStyle = 'red'
context.fillRect(50, 40, 400, 50)
context.save()
context.fillStyle = 'green'
context.fillRect(50, 120, 400, 50)
context.restore()
context.fillRect(50, 210, 400, 50)

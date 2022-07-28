const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

context.font = '60px consolas'
context.strokeStyle = 'green'
context.strokeText('Hello World!', 50, 100)
context.fillText('Hello World!', 50, 200)

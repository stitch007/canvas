const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

const sin = Math.sin(Math.PI / 6)
const cos = Math.cos(Math.PI / 6)

context.translate(150, 150)
for (let i = 0, c = 0; i <= 12; i++) {
  c = Math.floor(255 / 12 * i)
  context.fillStyle = 'rgb(' + c + ',' + c + ',' + c + ')'
  context.fillRect(0, 0, 100, 10)
  context.transform(cos, sin, -sin, cos, 0, 0)
}

context.setTransform(1, sin, 0, 1, 300, 100)
context.fillStyle = 'rgba(255, 128, 255, 0.5)'
context.fillRect(0, 0, 100, 100)

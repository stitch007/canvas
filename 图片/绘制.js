const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

const image = new Image()
image.src = './图片/image.png'

image.onload = () => {
  context.drawImage(image, 100, 100, 500, 500, 30, 50, 200, 200)
  context.drawImage(image, 260, 50, 200, 200)
}

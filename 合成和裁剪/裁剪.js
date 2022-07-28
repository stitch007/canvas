const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

const image = new Image()
image.src = './图片/image.png'

image.onload = () => {
  context.arc(150, 150, 100, 0, Math.PI * 2)
  context.clip()
  context.drawImage(image, 50, 50, 200, 200)
  // 效果一致
  // const path2d = new Path2D()
  // path2d.arc(150, 150, 100, 0, Math.PI * 2)
  // context.clip(path2d)
  // context.drawImage(image, 50, 50, 200, 200)
}

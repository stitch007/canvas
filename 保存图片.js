const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

const image = new Image()
image.src = './图片/image.png'

image.onload = () => {
  context.arc(150, 150, 100, 0, Math.PI * 2)
  context.clip()
  context.drawImage(image, 50, 50, 200, 200)
}

const button = document.createElement('button')
button.innerText = '下载图片'
button.style.display = 'block'
document.body.appendChild(button)

button.addEventListener('click', () => {
  const base64 = canvas.toDataURL('image/png')
  const a = document.createElement('a')
  a.download = '图片.png'
  a.href = base64
  a.click()
})

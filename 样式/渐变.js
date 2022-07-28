const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

const gradient1 = context.createLinearGradient(50, 20, 400, 20)
gradient1.addColorStop(0, '#fce38a')
gradient1.addColorStop(1, '#f38181')
context.beginPath()
context.fillStyle = gradient1
context.fillRect(50, 20, 400, 20)

const gradient2 = context.createLinearGradient(50, 60, 400, 20)
// 从0.5才开始渐变
gradient2.addColorStop(0.5, '#fce38a')
gradient2.addColorStop(1, '#f38181')
context.beginPath()
context.fillStyle = gradient2
context.fillRect(50, 60, 400, 20)

const gradient3 = context.createRadialGradient(150, 180, 50, 150, 180, 10)
gradient3.addColorStop(0, '#1abc9c')
gradient3.addColorStop(0.25, '#3498db')
gradient3.addColorStop(0.5, '#9b59b6')
gradient3.addColorStop(0.75, '#7f8c8d')
gradient3.addColorStop(1, '#dfe4ea')
context.beginPath()
context.fillStyle = gradient3
context.fillRect(90, 120, 120, 120)

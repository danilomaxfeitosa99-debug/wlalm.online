
let spotsRemaining = 3
const spotsElement = document.getElementById("spotsRemaining")


setInterval(() => {
  if (spotsRemaining > 0) {
    spotsRemaining--
    spotsElement.textContent = spotsRemaining

    
    spotsElement.style.animation = "flash 0.5s"
    setTimeout(() => {
      spotsElement.style.animation = ""
    }, 500)
  }
}, 30000) 


const style = document.createElement("style")
style.textContent = `
    @keyframes flash {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
    }
`
document.head.appendChild(style)


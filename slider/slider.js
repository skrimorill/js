const arrowLeft = document.getElementById("left")
const arrowRight = document.getElementById("right")
const items = document.querySelector(".items")
const computedStyles = getComputedStyle(items)


arrowLeft.addEventListener("click", event => {
  event.preventDefault()
  let courentRight = parseInt(computedStyles.right)

  if (courentRight > 0) {
    items.style.right = `${courentRight - 100}px`
  }
})

arrowRight.addEventListener("click", event => {
  event.preventDefault()
  let courentRight = parseInt(computedStyles.right)

  if(courentRight < 500) {
    items.style.right = `${courentRight + 100}px`
  }
})



const openButton = document.querySelector("#openOverlay")
const body = document.body

openButton.addEventListener("click", event => {
  const overElem = document.createElement("div")
  overElem.classList.add("overlay")

  overElem.addEventListener("click", e => { 
    if(!e.target.classList.contains("content")) {
      closeElement.click()
    }
  })

  const containerElement = document.createElement("div")
  containerElement.classList.add("modal-container")

  const contentElement = document.createElement("div")
  contentElement.classList.add("content")
  contentElement.innerHTML = "Hello <b>world</b>!"

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";

  overElem.appendChild(containerElement)
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement)
  body.appendChild(overElem)

  closeElement.addEventListener("click", e => {
    e.preventDefault();
    body.removeChild(overElem);
    });
  })
const mainContainerEl = document.querySelector(".main-container")
const btnEl = document.querySelector(".btn")
const popupContainerEl = document.querySelector(".popup-container")
const closeIconEl = document.querySelector(".close-icon")

btnEl.addEventListener("click", ()=>{
    mainContainerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", ()=>{
    mainContainerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
})

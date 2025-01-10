let items = document.querySelectorAll(".slider .list .item")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let thumbnails = document.querySelectorAll(".thumbnail .item")
let countItem = items.length
let itemActive = 0

next.onclick = function(){
    itemActive = itemActive + 1
    if(itemActive >= countItem){
        itemActive = 0
    }
    showSlider()
}
prev.onclick = function(){
    itemActive = itemActive - 1
    if(itemActive < 0){
        itemActive = countItem - 1
    }
    showSlider()
}
let refreshInterval = setInterval(() => {
    next.click()
}, 5000)

function showSlider(){
    let lastActiveItem = document.querySelector(".slider .list .item.active")
    let lastActiveThumbnail = document.querySelector(".thumbnail .item.active")

    lastActiveItem.classList.remove("active")
    lastActiveThumbnail.classList.remove("active")

    items[itemActive].classList.add("active")
    thumbnails[itemActive].classList.add("active")
    setPositionThumbnail(lastActiveThumbnail)

    clearInterval(refreshInterval)
    refreshInterval = setInterval(() => {
        next.click()
    }, 5000)
}

function setPositionThumbnail(lastActiveThumbnail){
    lastActiveThumbnail.scrollIntoView({
        behavior : "smooth",
        block : "nearest",
        inline : "center"
    })
}

thumbnails.forEach((thumbnail , index) => {
    thumbnail.addEventListener('click', function(){
        itemActive = index
        showSlider()
    })
})

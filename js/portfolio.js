const makeup = document.getElementById("makeup")
const hairstyle = document.getElementById("hairstyle")
const hairstyleImages = document.querySelectorAll(".hairstyle_image")

makeup.addEventListener("click", () => {
    hairstyle.classList.add("gray")
    makeup.classList.remove("gray")
    hairstyleImages.forEach((element) => {
        element.classList.add("back")
    })
})

hairstyle.addEventListener("click", () => {
    makeup.classList.add("gray")
    hairstyle.classList.remove("gray")
    hairstyleImages.forEach((element) => {
        element.classList.remove("back")
    })
})

const currentPage = window.location.pathname
const allPages = document.querySelectorAll(".footer_link")

allPages.forEach((page) => {
    if (page.getAttribute("href") === currentPage) {
        page.classList.add("underline")
    }
})
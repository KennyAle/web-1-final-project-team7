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
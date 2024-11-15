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

const messageBtns = document.getElementById("message_btns")
const messageBoxBtn = document.getElementById("message_box_btn")
const closeMessageBox = document.getElementById("close_message_box")

messageBoxBtn.addEventListener("click", () => {
    messageBtns.classList.add("appear")
    messageBoxBtn.classList.add("disappear")
})

closeMessageBox.addEventListener("click", () => {
    console.log("Close button clicked")
    messageBtns.classList.remove("appear")
    messageBoxBtn.classList.remove("disappear")
})


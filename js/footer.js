const currentPage = window.location.pathname
const allPages = document.querySelectorAll(".footer_link")

allPages.forEach((page) => {
    if (page.getAttribute("href") === currentPage) {
        page.classList.add("underline")
    }
})

const messageBox = document.getElementById("message_box")
const messageBoxBtn = document.getElementById("message_box_btn")

messageBoxBtn.addEventListener("click", () => {
    if (messageBox.classList.contains("appear")) {
        messageBox.classList.remove("appear")
        messageBoxBtn.classList.remove("disappear")
    } else {
        messageBox.classList.add("appear")
        messageBoxBtn.classList.add("disappear")
    }
})
const currentPage = window.location.pathname
const allPages = document.querySelectorAll(".footer_link")

allPages.forEach((page) => {
    if (page.getAttribute("href") === currentPage) {
        page.classList.add("underline")
    }
})
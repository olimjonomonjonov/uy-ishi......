const dropdown = document.querySelector(".dropdown");
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const selectedText = document.getElementById("selectedText");

dropdownBtn.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

dropdownMenu.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
        selectedText.textContent = item.textContent;
        dropdown.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});
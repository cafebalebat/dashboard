const body = document.querySelector("body"),
        modeToggle = document.querySelector(".mode-toggle");
        sidebar = document.querySelector("nav");
        sidebarToggle = document.querySelector(".sidebar-toggle");

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
});

sidebarToggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
})
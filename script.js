const body = document.querySelector("body"),
        modeToggle = document.querySelector(".mode-toggle");
        sidebar = document.querySelector("nav");
        sidebarToggle = document.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if (body.classList.contains("dark")){
        localStorage.setItem("mode", "dark")
    }else {
        localStorage.setItem("mode", "light")
    }
});

sidebarToggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")){
        localStorage.setItem("status", "close")
    }else {
        localStorage.setItem("status", "open")
    }
})

// Function to animate number
function animateNumber(element, target, duration) {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const interval = setInterval(() => {
        if (start < target) {
            start++;
            element.textContent = start;
        } else {
            clearInterval(interval);
            // Reset after reaching the target
            setTimeout(() => {
                start = 5000;
                element.textContent = start;
            }, 1000); // Wait for 1 second before resetting
        }
    }, stepTime);
}

// Get all number elements
const numbers = document.querySelectorAll('.number');
const limits = [21383214, 766417, 57762472]; // Target limits for each box

// Start animations with random delay
numbers.forEach((numberElement, index) => {
    const randomDelay = Math.random() * 5000; // Random delay up to 5000ms
    setTimeout(() => {
        animateNumber(numberElement, limits[index], 10000000000); // how many seconds to reach the target
    }, randomDelay);
});

// Mengecek apakah user sudah login
if (!localStorage.getItem('isLoggedIn')) {
    window.location.href = "https://cafebalebat.shop/login/";
}   else {
    // Fungsi untuk cek timeout 10 menit
    function checkLoginTimeout() {
        const loginTime = parseInt(localStorage.getItem('loginTime'));
        const currentTime = new Date().getTime();
        
        if (currentTime - loginTime > 600000) { 
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('loginTime');
            window.location.href = "https://cafebalebat.shop/login/";
        }
    }

    // Cek setiap 10 detik
    setInterval(checkLoginTimeout, 10000);
}

//Logout
document.getElementsByClassName('logout-mod').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginTime');
    window.location.href = this.getAttribute('href'); 
});
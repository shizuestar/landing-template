// Navbar fixed
window.onscroll = function(){
    const header = document.querySelector("header");
    const navbarNav = header.offsetTop;
    const toTop = document.querySelector("#topT");

    if(window.pageYOffset > navbarNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
    } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.add("hidden");
        toTop.classList.remove("flex");
    }
}

if (localStorage.theme === 'dark' ) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

// Hamburger toggle
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

window.addEventListener("click", function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
        console.log(e.target);
    }
});

// Dark Mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
    if (darkToggle.checked) {
        html.classList.add("dark");
        localStorage.setItem("theme","dark")
    } else{
        html.classList.remove("dark");
        localStorage.setItem("theme","")
    }
});


if (localStorage.theme === 'dark' ) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".navlinks");
    const navLinks = document.querySelectorAll(".navlinks li");


    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    });
}

navSlide();
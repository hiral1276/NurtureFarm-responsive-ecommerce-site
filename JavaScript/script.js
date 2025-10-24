document.addEventListener("DOMContentLoaded", function () {
    let searchForm = document.querySelector('.search-form');
    let shoppingCart = document.querySelector('.shopping-cart');
    let loginForm = document.querySelector('.login-form');
    let navbar = document.querySelector('.navbar');

    // Ensure buttons exist before adding event listeners
    document.querySelector('#search-btn')?.addEventListener('click', () => {
        searchForm?.classList.toggle('active');
        shoppingCart?.classList.remove('active');
        loginForm?.classList.remove('active');
        navbar?.classList.remove('active');
    });

    document.querySelector('#cart-btn')?.addEventListener('click', () => {
        if (shoppingCart) {
            shoppingCart.classList.toggle('active');
            searchForm?.classList.remove('active');
            loginForm?.classList.remove('active');
            navbar?.classList.remove('active');
        }
    });

    document.querySelector('#login-btn')?.addEventListener('click', () => {
        loginForm?.classList.toggle('active');
        searchForm?.classList.remove('active');
        shoppingCart?.classList.remove('active');
        navbar?.classList.remove('active');
    });

    document.querySelector('#menu-btn')?.addEventListener('click', () => {
        navbar?.classList.toggle('active');
        searchForm?.classList.remove('active');
        shoppingCart?.classList.remove('active');
        loginForm?.classList.remove('active');
    });

    // Hide all popups when scrolling
    window.addEventListener('scroll', () => {
        searchForm?.classList.remove('active');
        shoppingCart?.classList.remove('active');
        loginForm?.classList.remove('active');
        navbar?.classList.remove('active');
    });
});
let profileDropdown = document.getElementById('profile-dropdown');
let profileBtn = document.getElementById('profile-btn');

profileBtn?.addEventListener('click', () => {
    profileDropdown?.classList.toggle('active');
    // Close others
    document.querySelector('.search-form')?.classList.remove('active');
    document.querySelector('.shopping-cart')?.classList.remove('active');
    document.querySelector('.login-form')?.classList.remove('active');
    document.querySelector('.navbar')?.classList.remove('active');
});

// Close the dropdown if clicked outside
window.addEventListener('click', function (e) {
    if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
        profileDropdown?.classList.remove('active');
    }
});

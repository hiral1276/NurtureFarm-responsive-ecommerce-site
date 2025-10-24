document.addEventListener("DOMContentLoaded", function () {
    // Toggle dropdown visibility
    const profileBtn = document.getElementById("profile-btn");
    const dropdownMenu = document.getElementById("profile-dropdown");

    profileBtn?.addEventListener("click", () => {
        dropdownMenu?.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".profile-dropdown")) {
            dropdownMenu?.classList.remove("active");
        }
    });

    // Redirect logic    

    document.getElementById("faq-link")?.addEventListener("click", function () {
        window.location.href = "faq.html";
    });

    document.getElementById("help-link")?.addEventListener("click", function () {
        window.location.href = "help.html";
    });

    document.getElementById("logout-link")?.addEventListener("click", function () {
        // Add logout logic here if needed, for now just redirect
        window.location.href = "index.html.";
    });
});

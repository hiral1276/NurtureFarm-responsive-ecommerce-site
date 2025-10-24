function showForm(formId) {
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}

// Notification Toast
function showNotification(message, isSuccess = true) {
    const toast = document.createElement('div');
    toast.className = `custom-toast ${isSuccess ? 'success' : 'error'}`;
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Handle form submissions
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login-form form");
    const registerForm = document.querySelector("#register-form form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent actual submission
        showNotification("Login is Successful! 😊");

    // Redirect after a short delay
    setTimeout(() => {
        window.location.href = "index copy.html";
    }, 2000); // 2-second delay
    });

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent actual submission
        showNotification("Registration is Successful! 🎉");

    // Redirect after a short delay
    setTimeout(() => {
        window.location.href = "index copy.html";
    }, 2000); // 2-second delay
    });
});

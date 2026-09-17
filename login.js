function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

// Xử lý form khi chạy trên trình duyệt
if (typeof document !== "undefined") {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if (login(username, password)) {
            message.textContent = "Đăng nhập thành công!";
        } else {
            message.textContent = "Sai tên đăng nhập hoặc mật khẩu!";
        }
    });
}

// Export để Jest có thể test
if (typeof module !== "undefined") {
    module.exports = login;
}
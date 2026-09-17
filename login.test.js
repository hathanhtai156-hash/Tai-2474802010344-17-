const login = require("./login");

test("Đăng nhập đúng với admin và 123", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Đăng nhập sai mật khẩu", () => {
    expect(login("admin", "456")).toBe(false);
});

test("Đăng nhập sai username", () => {
    expect(login("user", "123")).toBe(false);
});
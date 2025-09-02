class LoginUserInput {
    constructor(email, password) {
        if (!email || !password) {
            throw new Error("Email and Password are required!");
        }
        this.email = email;
        this.password = password;
    }
}

module.exports = LoginUserInput;
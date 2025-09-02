class RegisterUserInput {
    constructor(name, email, password) {
        if (!name, !email, !password) {
            throw new Error("Name, Email and Password are required!");
        }

        this.name = name;
        this.email = email;
        this.password = password;
    }
}

module.exports = RegisterUserInput;
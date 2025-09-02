class UserAlreadyExists extends Error {
    constructor(message) {
        super(message);
        this.name = "UserAlreadyExists";
        this.statusCode = 400;
    }
}

module.exports = UserAlreadyExists;
class InvalidCredentialsException {
    constructor(message = 'Invalid credentials!') {
        super(message);
        this.message = "InvalidCredentialsException";
        this.statusCode = 401;
    }
}

module.exports = InvalidCredentialsException;
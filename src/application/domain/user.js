import Name from "./valueObjects/name.js";
import Email from "./valueObjects/email.js";
import Password from "./valueObjects/password.js"
import { v4 as guidv4 } from 'uuid';

class User {
    constructor(name, email, password, id = guidv4()) {
        if (!id || !name || !email || !password) {
            throw new Error("User properties cannot be empty.");
        }

        this.id = id; // UUID
        this.name = new Name(name);
        this.email = new Email(email);
        // Password Value Object já lida com hashing ao ser criado
        this.password = new Password(password);
    }

    // Métodos de comportamento de domínio
    async comparePassword(plainPassword) {
        return await this.password.compare(plainPassword);
    }

    updatePassword(newPassword) {
        this.password = new Password(newPassword);
    }

    toObject() {
        return {
            id: this.id,
            name: this.name.value,
            email: this.email.value,
            password: this.password.hashedPassword // Expor o hash, não a string pura
        };
    }
}

module.exports = User;
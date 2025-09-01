import jwt from 'jsonwebtoken'
import config from "../../config";

class JWTProvider {
    generateToken(payload) {
        return jwt.sign(payload, config.jwt.password, { expiresIn: config.jwt.expiresIn });
    }

    verifyToken(token) {
        try {
            return jwt.verify(token, config.jwt.secret);
        }
        catch (error) {
            return null;
        }
    }
}
module.exports = JWTProvider;
import express from "express";
import config from "./config/index.js";

export class App {
    server;
    constructor() {
        this.server = express();
    }

    start() {
        this.server.listen(config.server.port, (error) => {
            if (error) {
                console.error("Server failed to start:", error);
                process.exit(1);
            }
            console.log(`Server is running on port: ${config.server.port}`);
        });
    }
}
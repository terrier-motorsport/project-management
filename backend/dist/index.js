"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const boardRoutes = require('./routes/boards');
const dbUrl = 'mongodb://localhost:27017/project-management';
mongoose_1.default.connect(dbUrl);
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/boards', boardRoutes);
app.get('/', (req, res) => {
    res.send('Hello, MERN with TypeScript!');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

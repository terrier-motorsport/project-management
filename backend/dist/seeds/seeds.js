"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("../models/board");
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost:27017/project-management');
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});
const seedDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield board_1.BoardModel.deleteMany();
        const newboard = new board_1.BoardModel({
            title: 'Test Board',
            description: 'Testing A Board Object',
        });
        yield newboard.save();
        console.log('Seed data inserted successfully');
    }
    catch (err) {
        console.error('Error seeding the database:', err);
    }
});
seedDB().then(() => {
    mongoose_1.default.connection.close();
    console.log('Database Closed');
});

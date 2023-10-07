import { BoardModel } from "../models/board";
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/project-management');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected");
});

const seedDB = async () => {
  try {
    await BoardModel.deleteMany();

    const newboard = new BoardModel ({
      title: 'Test Board',
      description: 'Testing A Board Object',
    });

    await newboard.save();
    console.log('Seed data inserted successfully');
  } catch (err) {
    console.error('Error seeding the database:', err);
  }
};

seedDB().then(() => {
  mongoose.connection.close();
  console.log('Database Closed');
});

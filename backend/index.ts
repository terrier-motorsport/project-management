import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;
const boardRoutes = require('./routes/boards');


const dbUrl = 'mongodb://localhost:27017/project-management'

mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/boards', boardRoutes);

app.get('/', (req, res) => {
  res.send('Hello, MERN with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.ts
import express, { Express } from "express";
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes';
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors()); 

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL ?? "")
 .then(() => console.log('Connected to MongoDB'))
 .catch((error) => console.error('MongoDB connection error:', error));
// Routes
app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

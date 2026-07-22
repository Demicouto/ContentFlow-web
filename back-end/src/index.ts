import express from 'express'; 
import cors from 'cors'; 

import userRouter from './Router/userRouter.js';
import postRouter from './Router/postRouter.js'; 
import dashboardRouter from './Router/dashboardRouter.js'; 

import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = Number(process.env.PORT ?? 5000);
const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:3000";

app.use(cors({
  origin: frontendUrl,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  credentials: true
}));

app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({status: 'ok'});
});

app.use('/api', userRouter);
app.use('/api', postRouter);
app.use('/api', dashboardRouter);


app.listen(5000, () => {
  console.log("Servidor rodando em http://localhost:5000");
});
  
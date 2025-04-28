import express from 'express';
import { getAllUsers } from '../controllers/user-controller.js';

// const userRouter = express.Router();

// userRouter.get("/", getAllUsers);

// export default userRouter;
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", getAllUsers);

userRouter.post("/", getAllUsers);
export default userRouter;

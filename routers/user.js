const express = require('express');
const userRouter = new express.Router();

const { userLogin, userRegister, getAll, deleteMe, updateMe, verify,
    resetPassword, confirmPassword } = require('../controllers/user');

const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

userRouter.post("/login", userLogin);
userRouter.post("/register", userRegister);
userRouter.get("/users", [auth, admin], getAll);
userRouter.delete("/users", auth, deleteMe);
userRouter.patch("/users", auth, updateMe);
userRouter.get("/verify/:id", verify);
userRouter.post("/resetPassword/", resetPassword);
userRouter.get("/resetPassword/:id", confirmPassword);

module.exports = userRouter;
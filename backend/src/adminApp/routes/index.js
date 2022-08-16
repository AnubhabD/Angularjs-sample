import express from "express";
import user from "./UserRoute";

// import newsletteremail from './NewsLetterEmailRoute'

// intializing express router
const router = express.Router();

// intializing express with JSON
router.use(express.json());

// Routes starting with specific path...

router.use("/user-api", user);

// router.use('/newsletteremail-api', newsletteremail);

export default router;

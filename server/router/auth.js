const express = require("express");
const router = express.Router();

const User = require("../model/userSchema");
require("../db/conn");

router.get("/", (req, res) => {
  res.send("hello world");
});

//using promise
// router.post("/register", (req, res) => {
//   const { name, email, number, work, password, cpassword } = req.body;

//   if (!name || !email || !number || !work || !password || !cpassword) {
//     res.status(400).json({ message: "eroor fill mising" });
//   }

//   User.findOne({ email: email }).then((userexist) => {
//     if (userexist) {
//       res.status(422).json({ message: "user already exist" });
//     }

//     const user = new User({ name, email, number, work, password, cpassword });
//     user
//       .save()
//       .then(() => {
//         res.status(200).json({ message: "user created" });
//       })
//       .catch((err) => {
//         res.status(500).json({ message: "user not created " });
//       });
//   });
// });

try {
  router.post("/register", async (req, res) => {
    const { name, email, number, work, password, cpassword } = req.body;

    if (!name || !email || !number || !work || !password || !cpassword) {
      res.status(400).json({ message: "eroor fill mising" });
    }

    const userexist = await User.findOne({ email: email });
    if (userexist) {
      res.status(422).json({ message: "user already exist" });
    } else if (password != cpassword) {
      res.status(200).json({ message: "not match " });
    } else {
      const user = new User({ name, email, number, work, password, cpassword });
      user.save();
      res.status(200).json({ message: "user created" });
    }
  });
} catch (error) {
  console.log(error);
}

try {
  router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "eroor fill mising" });
    }

    const userexist = await User.findOne({ email: email });
    if (userexist) {
      res.status(200).json({ message: "login successful" });
    } else {
      res.status(400).json({ message: "error invaild data" });
    }
  });
} catch (error) {
  console.log(error);
}

module.exports = router;

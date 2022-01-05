const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//REGISTER
router.post("/register", async (req, res) => {
  //create a new user object in db
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    // Find the specified user from DB
    const loggedUser = await User.findOne({ username: req.body.username });
    // Check if User exists
    !loggedUser && res.status(401).json("Wrong credentials!");

    // decrypt user password in DB
    const hashedPassword = CryptoJS.AES.decrypt(
      loggedUser.password,
      process.env.PASS_SECRET
    );

    // convert it to string and add any encoding necessary fo special characters
    const userPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    // check if password in DB matches the one entered by user - after decryption
    userPassword !== req.body.password &&
      res.status(401).json("Wrong password!");

    const accessToken = jwt.sign(
      {
        id: loggedUser._id,
        isAdmin: loggedUser.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    const { password, ...others } = loggedUser._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
    console.log("error logging in", error);
  }
});

module.exports = router;

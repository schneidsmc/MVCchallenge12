// user from models
const { User } = require("../models");

// user data
const userData = [
  {
    username: "snipes",
    email: "wsnipes@gmail.com",
    password: "wordpass123",
  },
  {
    username: "barthany",
    email: "mcKen@gmail.com",
    password: "wordpass123",
  },
  {
    username: "skunkhollow",
    email: "gma@gmail.com",
    password: "wordpass123",
  },
];
// username
// email
// password

// bulkCreate
const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;

// export

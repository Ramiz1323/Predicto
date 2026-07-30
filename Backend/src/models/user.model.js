const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },    
});

// userSchema.pre("save", async function (next) {
//   console.log("Before saving user .... ",);
//   next();
// })

// userSchema.post("save", async function (doc,next) {
//   console.log("User saved successfully .... ", doc.username);
//   console.log("Welcome! ", doc.username);
//   next();
// })

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;

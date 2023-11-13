const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  gender: { type: Number },
  introduction: { type: String },
  avatar: { type: String },
  role: { type: Number } // 管理员1 ，编辑2
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
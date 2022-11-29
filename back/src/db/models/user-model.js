import { model } from "mongoose";
import { UserSchema } from "../schemas/user-schema.js";

const User = model("users", UserSchema);

export class UserModel {
  async create(userInfo) {
    return await User.create(userInfo);
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findByNickname(nickname) {
    return await User.findOne({ nickname });
  }

  async findById(userId) {
    return await User.findOne({ _id: userId });
  }

  async findAll() {
    return await User.find({});
  }

  async update(userId, update) {
    const filter = { _id: userId };
    const option = { returnOriginal: false };

    return await User.findByIdAndUpdate(filter, update, option);
  }

  async delete(userId) {
    return await User.findByIdAndDelete({ _id: userId });
  }
}

const userModel = new UserModel();

export { userModel };

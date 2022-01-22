const Collections = require('../mongo');
const UserSchema =  require('../user/userSchema');

class UserCollection extends Collections {
  constructor() {
    super('Users', UserSchema);
  }
  async create(object) {
    let newUser = new this.model({
      id: object.id,
      username: object.username,
      email: object.email,
      password: object.password,
    });
    const newUserObj = await newUser.save();
    const userResponse = {
      userData: newUserObj,
      message:"Sign up was successful"
    }
    return userResponse;
  };
};

module.exports = UserCollection;
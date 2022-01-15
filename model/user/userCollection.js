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
    return await newUser.save();
  };
};

module.exports = UserCollection;
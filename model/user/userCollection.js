const Collections = require('../mongo');
const UserSchema =  require('../user/userSchema');

class UserCollection extends Collections {
  constructor() {
    super('Users', UserSchema);
  }
  async create(object) {
    let newUser = new this.model({
      name: object.name,
      id: object.id
    });
    return await newUser.save();
  };
};

module.exports = UserCollection;

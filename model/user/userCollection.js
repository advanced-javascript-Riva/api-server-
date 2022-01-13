const Collections = require('../mongo');
const UserSchema =  require('../user/userSchema');

class UserCollection extends Collections {
  constructor() {
    super('Users', UserSchema);
  }
  async create(object) {
    let newUser = new this.model({
      username : {
        type:object.type,
        minLength:object.minLength,
        maxLength:object.maxLength,
        required: object.required
      },
      email: {
        type: object.type,
        required:object.required
      },
      password: {
        type:object.type,
        minLength:object.minLength,
        required:object.required
      }
    });
    return await newUser.save();
  };
};

module.exports = UserCollection;

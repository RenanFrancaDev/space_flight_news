const mongoose = require("moongose");

const schema = new mongoose.UserSchema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const SchemaUsers = mongoose.models.Users || mongoose.model('Users', schema);
module.exports = SchemaUsers;

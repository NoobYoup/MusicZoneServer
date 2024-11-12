const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tranminhtrungofficial:0UZLjYqzn8Pwhyf4@cluster0.1kxow.mongodb.net/MusicZoneDB"
    );
    console.log("Connect Success!");
  } catch (error) {
    console.log("Connect Error!");
    console.log(error);
  }
};

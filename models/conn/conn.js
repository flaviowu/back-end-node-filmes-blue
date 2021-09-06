const mongoose = require("mongoose");

function Conn(url, user, pass, banco) {
  mongoose
    .connect(`${url}/${banco}`, {
      user: user,
      pass: pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb Conectado");
    })
    .catch((err) => {
      console.error(err);
    });
}
module.exports = Conn;


// const Config = require("./config")

// function Conn() {
//   mongoose.connect(`${url}/${banco}`, {

//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("MongoDb Conectado");
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// }
module.exports = Conn;
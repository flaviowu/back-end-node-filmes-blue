const mongoose = require("mongoose");

// function Conn(url, porta, banco) {
//   mongoose
//     .connect(`mongodb://${url}:${porta}/${banco}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log("MongoDb Conectado");
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
// module.exports = Conn;
// 

const Config = require("./config")

function Conn() {
  mongoose.connect(`mongodb+srv://${Config.user}:${Config.pass}@cluster0.6xyk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
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
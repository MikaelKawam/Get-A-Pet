const mongoose = require('mongoose')

async function main() {
    await mongoose.connect(
      "mongodb+srv://deploy:uploaddeploy@cluster0.xgwsnin.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log('Conectou ao Mongoose')
}


main().catch((err) => console.log(err))


module.exports = mongoose
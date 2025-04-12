const mongoose = require("mongoose");
const Product = require("./models/Product"); // adjust if your path is different

require("dotenv").config(); // to load MONGO_URI from .env

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const runTest = async () => {
  try {
    const category = "collar"; // change to 'rib' or 'cuff' to test others

    const products = await Product.find({ category });

    console.log(
      `🟢 Found ${products.length} product(s) in category "${category}":`
    );
    products.forEach((p, i) => {
      console.log(`${i + 1}. ${p.name} | ${p.category}`);
    });
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    mongoose.connection.close();
  }
};

runTest();

require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");
const Testimonial = require("./models/Testimonial");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleProducts = [
  {
    name: "Classic Polo Collar",
    category: "collar",
    price: 40,
    image: "https://via.placeholder.com/150",
    description: "A high-quality polo collar made with fine knit.",
  },
  {
    name: "Striped Collar",
    category: "collar",
    price: 55,
    image: "https://via.placeholder.com/150",
    description: "Stylish striped collar with premium finish.",
  },
  {
    name: "Standard Rib",
    category: "rib",
    price: 25,
    image: "https://via.placeholder.com/150",
    description: "Durable ribbing with excellent elasticity.",
  },
  {
    name: "Soft Touch Rib",
    category: "rib",
    price: 30,
    image: "https://via.placeholder.com/150",
    description: "Breathable and stretchable rib fabric.",
  },
  {
    name: "Basic Cuff",
    category: "cuff",
    price: 20,
    image: "https://via.placeholder.com/150",
    description: "Simple and durable knitted cuff.",
  },
  {
    name: "Custom Cuff",
    category: "cuff",
    price: 35,
    image: "https://via.placeholder.com/150",
    description: "Made-to-order cuffs in various designs.",
  },
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log("✅ Products seeded!");

  mongoose.connection.close();
};

seedDB();

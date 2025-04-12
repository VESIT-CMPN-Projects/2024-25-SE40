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
    image: "http://localhost:5000/uploads/man.png",
    description: "A high-quality polo collar made with fine knit.",
  },
  {
    name: "Custom Collar",
    category: "collar",
    price: 55,
    image: "http://localhost:5000/uploads/customcollar2.jpg",
    description: "Stylish striped collar with premium finish.",
  },
  {
    name: "Standard Rib",
    category: "rib",
    price: 25,
    image: "http://localhost:5000/uploads/ribs.png",
    description: "Durable ribbing with excellent elasticity.",
  },
  {
    name: "Soft Touch Rib",
    category: "rib",
    price: 30,
    image: "http://localhost:5000/uploads/customcuff.jpg",
    description: "Breathable and stretchable rib fabric.",
  },
  {
    name: "Basic Cuff",
    category: "cuff",
    price: 20,
    image: "http://localhost:5000/uploads/cuff.jpg",
    description: "Simple and durable knitted cuff.",
  },
  
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log("✅ Products seeded!");

  mongoose.connection.close();
};

seedDB();

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

const sampleTestimonials = [
  {
    name: "Rajat Mehta",
    role: "Garment Manufacturer",
    quote:
      "Seamless experience and top-quality collars! Balaji Knittwell's craftsmanship is outstanding. The collars are durable, well-stitched, and meet all our custom requirements. Highly recommended!",
    image: "http://localhost:5000/uploads/testimonial1.png",
  },
  {
    name: "Sneha Kapoor",
    role: "Fashion Brand Owner",
    quote:
      "Reliable supplier with excellent customer service! We’ve been sourcing collars from Balaji Knittwell for over a year now. The consistency in quality and timely delivery makes them our preferred supplier.",
    image: "http://localhost:5000/uploads/testimonial2.jpg",
  },
  {
    name: "Arjun Bansal",
    role: "Textile Supplier",
    quote:
      "Great collaboration with top-notch materials!Their partnership with Reliance ensures high-quality yarn, resulting in superior fabric strength. Our clients love the finish of the collars!",
    image: "http://localhost:5000/uploads/testimonial3.png",
  },
  {
    name: "Maya Singh",
    role: "Boutique Owner",
    quote:
      "Professional team with innovative solutions!They understood our needs perfectly and delivered customized designs that fit our brand vision. The website makes it so easy to browse and place orders!",
    image: "http://localhost:5000/uploads/testimonial1.png",
  },
  {
    name: "Ajay Verma",
    role: "Wholesale Dealer",
    quote:
      "Efficient process and competitive pricing!Balaji Knittwell provides high-quality collars at great prices. Their negotiation flexibility and customer-first approach are commendable.",
    image: "http://localhost:5000/uploads/testimonial2.jpg",
  },
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log("✅ Products seeded!");

  await Testimonial.deleteMany({});
  await Testimonial.insertMany(sampleTestimonials);
  console.log("✅ Testimonials seeded!");

  mongoose.connection.close();
};

seedDB();

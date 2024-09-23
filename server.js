const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const CategoryRoute = require("./routes/category");
const RestaurantRoute = require("./routes/restaurant");
const FoodRoute = require("./routes/food");
const AuthRoute = require("./routes/auth");
const UserRoute = require("./routes/user");
const AddressRoute = require("./routes/address");
const OrderRoute = require("./routes/order");
const PayoutRoute = require("./routes/payouts");
const DriverRoute = require("./routes/drivers");
const FeedBackRoute = require("./routes/feedback");
const { fireBaseConnection } = require('./utils/fbConnect');

dotenv.config();

// Firebase connection
fireBaseConnection();

// MongoDB connection
mongoose.connect(process.env.MONGOURL)
  .then(() => console.log("EatsEasy Database Connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", AuthRoute);
app.use("/api/users", UserRoute);
app.use("/api/category", CategoryRoute);
app.use("/api/restaurants", RestaurantRoute);
app.use("/api/foods", FoodRoute);
app.use("/api/address", AddressRoute);
app.use("/api/orders", OrderRoute);
app.use("/api/payouts", PayoutRoute);
app.use("/api/drivers", DriverRoute);
app.use("/api/feedbacks", FeedBackRoute);

// Export the app (instead of app.listen)
module.exports = app;

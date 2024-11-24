const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SignUp", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
})
.then(() => {
    console.log("Database connection established");
})
.catch((error) => {
    console.error("Database connection error:", error);
});

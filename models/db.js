const mongoose = require("mongoose");
const User = require("./userschema");
const users = require("../users/users");
const Recipe = require("./recipeSchema");
const recipes = require("../recipes/recipes");
const Category = require("./categorySchema");
const categories = require("../categories/categories");
let dbUrl = "mongodb://localhost:27017/Recipe";

// Det her kan vi finde ud af når vi en gang deployer

// if (process.env.NODE_ENV === 'production') {
//     dbUrl = process.env.MONGODB_URI;
// }

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${dbUrl}`);
});
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// Connect to database
// Vil vi gøre det her?
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Listen for signals to shutdown, so we can close the connection to the database
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts
process.once("SIGUSR2", () => {
  gracefulShutdown("nodemon restart", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});
// For app termination
process.on("SIGINT", () => {
  gracefulShutdown("app termination", () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on("SIGTERM", () => {
  gracefulShutdown("Heroku app shutdown", () => {
    process.exit(0);
  });
});

async function seeder() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error);
  }

  const db = mongoose.connection;

  let user = await User.estimatedDocumentCount();
  if (!user) {
    try {
      await User.create(users);
      await Recipe.create(recipes);
      let savedDocument = await Category.create(categories);
      console.log(savedDocument);
    } catch (error) {
      console.log(error);
    } finally {
      // Ensures that the client will close when you finish/error
      //await db.close();
    }
  }
}

seeder();

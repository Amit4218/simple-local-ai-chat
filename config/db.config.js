import mongoose from "mongoose";

const ConnectDb = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // res.status(200).json({
    //   message: "connected to database",
    // });
    console.log("connected to db");
  } catch (error) {
    console.log("Error: ", error);
    // res.status(500).json({
    //   message: "Error connecting to database",
    // });
  }
};

export default ConnectDb;

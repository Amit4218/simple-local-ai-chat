import express from "express";
import axios from "axios";

const router = express.Router();

router.post(`/generate`, async (req, res) => {
  try {
    const { userPrompt, selectedModel } = req.body;

    const response = await axios.post(`${process.env.AI_API}/api/generate`, {
      model: selectedModel,
      prompt: userPrompt,
      stream: false,
    });

    // console.log(response.data);

    if (!response.data) {
      return res.status(500).json({
        message: "Something went wrong",
      });
    }

    res.status(200).json({
      message: response.data.response, // adjust if response structure is different
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;

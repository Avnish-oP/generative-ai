import express from "express";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

const genAI = new GoogleGenerativeAI("AIzaSyAZREVuOaJr-MiM9aw4GJ6LAQsxknBoG-U");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/generate", async (req, res) => {
  const { prompt, model } = req.body;
  const aiModel = genAI.getGenerativeModel({ model: model });

  try {
    const result = await aiModel.generateContent(prompt);
    const response = result.response;
    const content = response.text();

    res.json({ text: content });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).send("Error generating content");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

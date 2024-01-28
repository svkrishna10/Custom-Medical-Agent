const express = require("express");
const { OpenAI } = require("openai");
const cors = require("cors"); 

const app = express();
const port = 3000;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

app.use(express.json());
app.use(cors());

app.post("/ask", async (req, res) => {
  const { message } = req.body;
  console.log('message',message);
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: "You are a medical agent." }, { role: "user", content: message }],
  });
  
  const reply = completion.choices[0].message;
  console.log("reply",reply);
  res.json({ reply });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const express = require("express");
const cors = require("cors");
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);

app.get("/", (req, res) => {
  res.json({
    status: "online",
    bot: client.user ? client.user.tag : "Connecting..."
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Vecna Backend running on port ${PORT}`);
});

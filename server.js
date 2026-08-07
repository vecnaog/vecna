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

// Home Route
app.get("/", (req, res) => {
  res.json({
    status: "online",
    bot: client.user ? client.user.tag : "Connecting..."
  });
});

// Guilds Route
app.get("/guilds", (req, res) => {
  if (!client.isReady()) {
    return res.status(503).json({
      error: "Bot is still connecting..."
    });
  }

  const guilds = client.guilds.cache.map(guild => ({
    id: guild.id,
    name: guild.name,
    icon: guild.iconURL({ dynamic: true })
  }));

  res.json(guilds);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Vecna Backend running on port ${PORT}`);
});

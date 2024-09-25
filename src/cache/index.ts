import { createClient } from "redis";
import { redisConfig } from "@/config";

const client = createClient({
  // url: redisConfig.REDIS_HOST,
  // password: redisConfig.REDIS_PASSWORD,
  socket: {
    host: "127.0.0.1",
    // host: redisConfig.REDIS_HOST,
    port: 6379,
    tls: false,
  },
  // password: redisConfig.REDIS_PASSWORD,
});

client.on("error", (error) => {
  console.error(error);
});

async function connectRedis() {
  try {
    if (!client.isOpen) {
      await client.connect(); // Conectar el cliente si aún no está conectado
    }
  } catch (error) {
    console.error(error);
  }
}

export { client, connectRedis };

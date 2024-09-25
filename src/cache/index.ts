import { createClient } from "redis";
import { redisConfig } from "@/config";

const client = createClient({
  socket: {
    host: redisConfig.REDIS_HOST,
    port: redisConfig.REDIS_PORT,
    tls: false,
  },
  password: redisConfig.REDIS_PASSWORD,
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
